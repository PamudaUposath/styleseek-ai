'use client';

import React, { useState, useRef, useEffect } from 'react';
import { RecommendRequest, RecommendedProduct, ChatMessage, EXAMPLE_PROMPTS } from '@styleseek/shared';
import { requestRecommendations } from '../lib/api-client';
import { RecommendationCard } from './RecommendationCard';
import { Sparkles, Send, Trash2, Loader2, AlertCircle, User, Bot, Zap, Cpu, Compass } from 'lucide-react';

interface DisplayMessage {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  products?: RecommendedProduct[];
  timestamp: string;
}

export const ChatInterface: React.FC = () => {
  const [messages, setMessages] = useState<DisplayMessage[]>([]);
  const [inputMessage, setInputMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const chatContainerRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);

  // FIX: Scroll ONLY the inner chat messages container, NEVER the window page!
  const scrollToBottom = () => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTo({
        top: chatContainerRef.current.scrollHeight,
        behavior: 'smooth'
      });
    }
  };

  useEffect(() => {
    if (messages.length > 0 || isLoading) {
      scrollToBottom();
    }
  }, [messages, isLoading]);

  const handleSend = async (textToSend?: string) => {
    const text = (textToSend || inputMessage).trim();
    if (!text || isLoading) return;

    setError(null);
    setInputMessage('');
    setIsLoading(true);

    const userMessageObj: DisplayMessage = {
      id: 'msg-' + Date.now(),
      role: 'user',
      content: text,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages(prev => [...prev, userMessageObj]);

    // Build recent history for context
    const historyPayload: ChatMessage[] = messages.slice(-4).map(m => ({
      role: m.role,
      content: m.content
    }));

    try {
      const payload: RecommendRequest = {
        message: text,
        history: historyPayload
      };

      const response = await requestRecommendations(payload);

      const assistantMessageObj: DisplayMessage = {
        id: 'res-' + Date.now(),
        role: 'assistant',
        content: response.message,
        products: response.products,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };

      setMessages(prev => [...prev, assistantMessageObj]);
    } catch (err: any) {
      console.error('Chat error:', err);
      setError(err.message || 'Something went wrong while finding recommendations.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const handleClear = () => {
    setMessages([]);
    setError(null);
  };

  return (
    <section id="assistant" className="py-16 px-4 max-w-6xl mx-auto relative z-10">
      {/* Section Header */}
      <div className="text-center mb-10">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-card text-xs font-semibold text-cyan-300 border border-cyan-500/30 mb-4 shadow-lg shadow-cyan-500/10">
          <Cpu className="w-4 h-4 text-cyan-400 animate-pulse" />
          <span>NEURAL STYLING ENGINE ACTIVE</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight mb-3">
          Ask <span className="text-gradient">StyleSeek AI</span> Assistant
        </h2>
        <p className="text-sm sm:text-base text-gray-400 max-w-xl mx-auto leading-relaxed">
          Describe your preferred occasion, budget ceiling, or style choices in normal language. Our Amazon Nova engine delivers verified, available products in LKR.
        </p>
      </div>

      {/* Futuristic Main Chat Container */}
      <div className="glass-panel rounded-3xl border border-gray-800/80 shadow-2xl overflow-hidden flex flex-col min-h-[620px] max-h-[820px] relative">
        {/* Top Neural HUD Header */}
        <div className="px-6 py-4 bg-gray-950/80 border-b border-gray-800/80 flex items-center justify-between backdrop-blur-xl">
          <div className="flex items-center gap-3">
            <div className="relative flex items-center justify-center">
              <div className="w-3 h-3 rounded-full bg-emerald-500 animate-ping absolute" />
              <div className="w-3 h-3 rounded-full bg-emerald-400" />
            </div>
            <div className="flex flex-col">
              <span className="text-xs font-bold text-gray-100 tracking-wide uppercase flex items-center gap-1.5">
                <Zap className="w-3.5 h-3.5 text-indigo-400" />
                Live Amazon Nova Discovery Session
              </span>
              <span className="text-[10px] text-gray-400">
                15s Real-Time Guardrails • Guaranteed LKR Catalogue Matching
              </span>
            </div>
          </div>

          {messages.length > 0 && (
            <button
              onClick={handleClear}
              className="px-3.5 py-1.5 rounded-xl text-xs font-semibold text-gray-400 hover:text-rose-400 hover:bg-rose-950/30 transition-all flex items-center gap-1.5 border border-gray-800 hover:border-rose-900/40"
              title="Clear current conversation"
            >
              <Trash2 className="w-3.5 h-3.5" />
              <span>Clear Session</span>
            </button>
          )}
        </div>

        {/* Scrollable Inner Chat Transcript Container (SCROLL SCOPED ONLY HERE) */}
        <div
          ref={chatContainerRef}
          className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-6 scroll-smooth"
        >
          {/* Empty State / Suggested Prompts */}
          {messages.length === 0 && (
            <div className="h-full flex flex-col items-center justify-center text-center py-12 px-4">
              <div className="w-20 h-20 rounded-3xl bg-gradient-to-tr from-cyan-600/20 via-indigo-600/20 to-purple-600/20 border border-cyan-500/30 flex items-center justify-center text-cyan-300 mb-6 shadow-2xl shadow-cyan-500/20 relative group">
                <Compass className="w-10 h-10 group-hover:rotate-45 transition-transform duration-500" />
                <div className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-cyan-400 animate-pulse" />
              </div>
              <h3 className="text-xl font-extrabold text-white mb-2 tracking-tight">
                What are you looking for today?
              </h3>
              <p className="text-xs sm:text-sm text-gray-400 max-w-md mb-8 leading-relaxed">
                Describe your desired budget ceiling, colours, or clothing styles. Or select any prompt below to test live AI discovery:
              </p>

              {/* Prompt Chips Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-2xl w-full">
                {EXAMPLE_PROMPTS.map((prompt, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleSend(prompt)}
                    className="p-3.5 rounded-2xl glass-card text-left text-xs font-medium text-gray-300 hover:text-white border-white/10 hover:border-cyan-400/50 hover:bg-cyan-950/20 transition-all flex items-center justify-between group shadow-sm"
                  >
                    <span className="line-clamp-1">"{prompt}"</span>
                    <Send className="w-3.5 h-3.5 text-cyan-400 opacity-0 group-hover:opacity-100 transition-all transform group-hover:translate-x-1 flex-shrink-0 ml-2" />
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Messages List */}
          {messages.map(msg => (
            <div
              key={msg.id}
              className={`flex gap-3 sm:gap-4 ${
                msg.role === 'user' ? 'justify-end' : 'justify-start'
              }`}
            >
              {msg.role === 'assistant' && (
                <div className="w-9 h-9 rounded-2xl bg-gradient-to-tr from-cyan-500 via-indigo-600 to-purple-600 flex items-center justify-center text-white flex-shrink-0 mt-1 shadow-lg shadow-indigo-500/20 border border-white/20">
                  <Bot className="w-5 h-5" />
                </div>
              )}

              <div className="max-w-[88%] sm:max-w-[78%] space-y-3">
                <div
                  className={`p-4 sm:p-5 rounded-2xl text-sm leading-relaxed ${
                    msg.role === 'user'
                      ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-tr-none shadow-xl shadow-indigo-600/20 font-medium'
                      : 'glass-card text-gray-100 rounded-tl-none border-white/10 bg-surface/90'
                  }`}
                >
                  <p className="whitespace-pre-wrap">{msg.content}</p>
                  <span
                    className={`block text-[10px] mt-2 text-right ${
                      msg.role === 'user' ? 'text-indigo-200' : 'text-gray-500'
                    }`}
                  >
                    {msg.timestamp}
                  </span>
                </div>

                {/* Recommendations Grid inside Assistant Message */}
                {msg.products && msg.products.length > 0 && (
                  <div className="mt-4">
                    <div className="text-xs font-bold text-cyan-300 mb-3.5 flex items-center gap-2 uppercase tracking-wider">
                      <Sparkles className="w-4 h-4 text-cyan-400" />
                      Verified Candidate Recommendations ({msg.products.length})
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                      {msg.products.map(product => (
                        <RecommendationCard key={product.id} product={product} />
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {msg.role === 'user' && (
                <div className="w-9 h-9 rounded-2xl bg-gray-800/90 border border-gray-700 flex items-center justify-center text-gray-300 flex-shrink-0 mt-1 shadow-md">
                  <User className="w-5 h-5" />
                </div>
              )}
            </div>
          ))}

          {/* Loading Skeleton */}
          {isLoading && (
            <div className="flex gap-4 items-start">
              <div className="w-9 h-9 rounded-2xl bg-gradient-to-tr from-cyan-500 to-indigo-600 flex items-center justify-center text-white flex-shrink-0 animate-pulse shadow-lg">
                <Bot className="w-5 h-5" />
              </div>
              <div className="space-y-4 max-w-[85%]">
                <div className="glass-card p-4 rounded-2xl rounded-tl-none text-xs text-cyan-300 flex items-center gap-2.5 border-cyan-500/30">
                  <Loader2 className="w-4 h-4 animate-spin text-cyan-400" />
                  <span>Processing natural language intent with Amazon Nova...</span>
                </div>

                {/* Skeleton Loader Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[1, 2].map(i => (
                    <div
                      key={i}
                      className="glass-card h-48 rounded-2xl p-4 animate-pulse flex flex-col justify-between border-white/10"
                    >
                      <div className="h-4 bg-gray-800/80 rounded-full w-2/3" />
                      <div className="h-3 bg-gray-800/50 rounded-full w-full" />
                      <div className="h-10 bg-gray-800/30 rounded-xl" />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Error Banner */}
          {error && (
            <div className="p-4 rounded-2xl bg-rose-950/40 border border-rose-900/60 text-rose-200 text-xs flex items-center justify-between gap-3 shadow-lg">
              <div className="flex items-center gap-2">
                <AlertCircle className="w-4 h-4 text-rose-400 flex-shrink-0" />
                <span>{error}</span>
              </div>
              <button
                onClick={() => setError(null)}
                className="hover:underline text-rose-300 font-bold"
              >
                Dismiss
              </button>
            </div>
          )}
        </div>

        {/* Input Bar Footer */}
        <div className="p-4 sm:p-5 bg-gray-950/90 border-t border-gray-800/80 backdrop-blur-xl">
          <div className="relative flex items-center">
            <textarea
              ref={inputRef}
              value={inputMessage}
              onChange={e => setInputMessage(e.target.value)}
              onKeyDown={handleKeyDown}
              disabled={isLoading}
              placeholder="Describe what you want (e.g., 'Show me black T-shirts under LKR 3,000')..."
              rows={1}
              maxLength={500}
              className="w-full pl-5 pr-14 py-4 rounded-2xl bg-gray-900/90 text-sm text-white placeholder-gray-500 border border-gray-800 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 outline-none resize-none disabled:opacity-50 transition-all shadow-inner"
            />

            <button
              onClick={() => handleSend()}
              disabled={!inputMessage.trim() || isLoading}
              className="absolute right-3 p-3 rounded-xl bg-gradient-to-r from-cyan-500 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 disabled:from-gray-800 disabled:to-gray-800 text-white disabled:text-gray-500 transition-all shadow-lg shadow-cyan-500/20"
              title="Send shopping request"
            >
              {isLoading ? (
                <Loader2 className="w-4 h-4 animate-spin" />
              ) : (
                <Send className="w-4 h-4" />
              )}
            </button>
          </div>
          <div className="flex items-center justify-between mt-2 text-[10px] text-gray-400 px-2">
            <span>Press <kbd className="px-1.5 py-0.5 rounded bg-gray-800 text-gray-300 font-mono text-[9px]">Enter</kbd> to send request • Maximum 500 characters</span>
            <span className="font-mono text-cyan-400/80">{inputMessage.length}/500</span>
          </div>
        </div>
      </div>
    </section>
  );
};
