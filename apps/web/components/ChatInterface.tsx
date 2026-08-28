'use client';

import React, { useState, useRef, useEffect } from 'react';
import { RecommendRequest, RecommendedProduct, ChatMessage, EXAMPLE_PROMPTS } from '@styleseek/shared';
import { requestRecommendations } from '../lib/api-client';
import { RecommendationCard } from './RecommendationCard';
import { Sparkles, Send, Trash2, Loader2, AlertCircle, User, Bot, RefreshCw } from 'lucide-react';

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

  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
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
    <section id="assistant" className="py-12 px-4 max-w-6xl mx-auto">
      {/* Section Header */}
      <div className="text-center mb-8">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-card text-xs font-semibold text-indigo-400 border border-indigo-500/20 mb-3">
          <Sparkles className="w-3.5 h-3.5" />
          Interactive AI Discovery
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-2">
          Ask StyleSeek AI Assistant
        </h2>
        <p className="text-sm sm:text-base text-gray-400 max-w-xl mx-auto">
          Type your preferences or click an example prompt below. Nova AI will analyze your intent and return verified available catalogue items.
        </p>
      </div>

      {/* Main Container */}
      <div className="glass-panel rounded-3xl border border-gray-800 shadow-2xl overflow-hidden flex flex-col min-h-[600px] max-h-[850px]">
        {/* Header Bar */}
        <div className="px-6 py-4 bg-surface/80 border-b border-gray-800 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-3 h-3 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-sm font-semibold text-gray-200">
              StyleSeek Assistant Session
            </span>
            <span className="text-xs text-gray-500 hidden sm:inline">
              (No Login Required)
            </span>
          </div>

          {messages.length > 0 && (
            <button
              onClick={handleClear}
              className="px-3 py-1.5 rounded-lg text-xs font-medium text-gray-400 hover:text-red-400 hover:bg-red-950/30 transition-all flex items-center gap-1.5 border border-transparent hover:border-red-900/50"
              title="Clear chat transcript"
            >
              <Trash2 className="w-3.5 h-3.5" />
              Clear Conversation
            </button>
          )}
        </div>

        {/* Chat Transcript Area */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-6">
          {/* Empty State / Suggested Prompts */}
          {messages.length === 0 && (
            <div className="h-full flex flex-col items-center justify-center text-center py-10 px-4">
              <div className="w-16 h-16 rounded-2xl bg-indigo-600/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 mb-4 shadow-inner">
                <Sparkles className="w-8 h-8 animate-bounce" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">
                What are you looking for today?
              </h3>
              <p className="text-xs sm:text-sm text-gray-400 max-w-md mb-8">
                Try asking for specific budgets, occasions, colours, or style matching. Select a suggested prompt below to get started instantly:
              </p>

              {/* Prompt Chips Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 max-w-2xl w-full">
                {EXAMPLE_PROMPTS.map((prompt, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleSend(prompt)}
                    className="p-3 rounded-xl glass-card text-left text-xs font-medium text-gray-300 hover:text-white hover:border-indigo-500/40 transition-all flex items-center justify-between group"
                  >
                    <span className="line-clamp-1">"{prompt}"</span>
                    <Send className="w-3.5 h-3.5 text-indigo-400 opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0 ml-2" />
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Messages */}
          {messages.map(msg => (
            <div
              key={msg.id}
              className={`flex gap-3 sm:gap-4 ${
                msg.role === 'user' ? 'justify-end' : 'justify-start'
              }`}
            >
              {msg.role === 'assistant' && (
                <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-indigo-600 to-purple-600 flex items-center justify-center text-white flex-shrink-0 mt-1 shadow-md">
                  <Bot className="w-4 h-4" />
                </div>
              )}

              <div className={`max-w-[85%] sm:max-w-[75%] space-y-3`}>
                <div
                  className={`p-4 rounded-2xl text-sm leading-relaxed ${
                    msg.role === 'user'
                      ? 'bg-indigo-600 text-white rounded-tr-none shadow-lg shadow-indigo-600/10'
                      : 'glass-card text-gray-200 rounded-tl-none border-gray-800'
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
                    <div className="text-xs font-semibold text-indigo-300 mb-3 flex items-center gap-1.5">
                      <Sparkles className="w-3.5 h-3.5 text-indigo-400" />
                      Recommended Items ({msg.products.length})
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
                <div className="w-8 h-8 rounded-xl bg-gray-800 border border-gray-700 flex items-center justify-center text-gray-300 flex-shrink-0 mt-1">
                  <User className="w-4 h-4" />
                </div>
              )}
            </div>
          ))}

          {/* Loading Skeleton */}
          {isLoading && (
            <div className="flex gap-4 items-start">
              <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-indigo-600 to-purple-600 flex items-center justify-center text-white flex-shrink-0 animate-pulse">
                <Bot className="w-4 h-4" />
              </div>
              <div className="space-y-4 max-w-[80%]">
                <div className="glass-card p-4 rounded-2xl rounded-tl-none text-xs text-indigo-300 flex items-center gap-2">
                  <Loader2 className="w-4 h-4 animate-spin text-indigo-400" />
                  <span>Finding the best matches with Amazon Nova...</span>
                </div>

                {/* Skeleton Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[1, 2].map(i => (
                    <div
                      key={i}
                      className="glass-card h-44 rounded-2xl p-4 animate-pulse flex flex-col justify-between border-gray-800"
                    >
                      <div className="h-4 bg-gray-800 rounded w-2/3" />
                      <div className="h-3 bg-gray-800/60 rounded w-full" />
                      <div className="h-8 bg-gray-800/40 rounded" />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Error Banner */}
          {error && (
            <div className="p-4 rounded-2xl bg-red-950/40 border border-red-900/50 text-red-200 text-xs flex items-center justify-between gap-3">
              <div className="flex items-center gap-2">
                <AlertCircle className="w-4 h-4 text-red-400 flex-shrink-0" />
                <span>{error}</span>
              </div>
              <button
                onClick={() => setError(null)}
                className="hover:underline text-red-300 font-semibold"
              >
                Dismiss
              </button>
            </div>
          )}

          <div ref={messagesEndRef} />
        </div>

        {/* Input Bar */}
        <div className="p-4 bg-surface/90 border-t border-gray-800">
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
              className="w-full pl-4 pr-12 py-3.5 rounded-2xl bg-gray-900/90 text-sm text-white placeholder-gray-500 border border-gray-800 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 outline-none resize-none disabled:opacity-50 transition-all"
            />

            <button
              onClick={() => handleSend()}
              disabled={!inputMessage.trim() || isLoading}
              className="absolute right-2.5 p-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 disabled:bg-gray-800 text-white disabled:text-gray-500 transition-all shadow-md shadow-indigo-600/20"
              title="Send request"
            >
              {isLoading ? (
                <Loader2 className="w-4 h-4 animate-spin" />
              ) : (
                <Send className="w-4 h-4" />
              )}
            </button>
          </div>
          <div className="flex items-center justify-between mt-2 text-[10px] text-gray-500 px-2">
            <span>Press Enter to send request • Maximum 500 characters</span>
            <span>{inputMessage.length}/500</span>
          </div>
        </div>
      </div>
    </section>
  );
};
