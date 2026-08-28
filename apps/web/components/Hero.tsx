'use client';

import React from 'react';
import { Sparkles, ArrowRight, ShieldCheck, Zap } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section className="relative pt-12 pb-8 md:pt-20 md:pb-12 overflow-hidden">
      {/* Background Decorative Blur Elements */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-indigo-600/15 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[350px] h-[350px] bg-purple-600/15 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 text-center relative z-10">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-card text-xs font-medium text-indigo-300 border border-indigo-500/30 mb-6 shadow-sm">
          <Zap className="w-3.5 h-3.5 text-amber-400 animate-pulse" />
          <span>Standalone AI Fashion Discovery Assistant</span>
          <span className="w-1 h-1 rounded-full bg-gray-500" />
          <span className="text-purple-300">Amazon Nova & Bedrock</span>
        </div>

        <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white mb-6 leading-[1.15]">
          Find Your Style <br className="hidden sm:inline" />
          <span className="text-gradient">With Conversational AI</span>
        </h1>

        <p className="max-w-2xl mx-auto text-base sm:text-lg text-gray-300 mb-8 leading-relaxed font-normal">
          Describe what you're looking for and StyleSeek AI will find suitable items from our available collection. Powered by Amazon Bedrock, Amazon Nova, and serverless AWS architecture.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4 mb-10">
          <a
            href="#assistant"
            className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white font-semibold text-sm transition-all shadow-xl shadow-indigo-600/25 flex items-center gap-2 group"
          >
            <Sparkles className="w-4 h-4" />
            Start Styling Assistant
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
          <a
            href="#catalogue"
            className="px-6 py-3.5 rounded-xl glass-card text-gray-200 font-semibold text-sm hover:text-white transition-all border border-gray-700 hover:border-gray-500"
          >
            Browse Catalogue (30 Items)
          </a>
        </div>

        {/* AWS Tech Pill Row */}
        <div className="pt-6 border-t border-gray-800/80 max-w-3xl mx-auto flex flex-wrap items-center justify-center gap-6 text-xs text-gray-400">
          <div className="flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span>Strict Validation (No Fake Products)</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-indigo-500" />
            <span>Deterministic Budget Protection</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-purple-500" />
            <span>Multi-turn Conversation Support</span>
          </div>
        </div>
      </div>
    </section>
  );
};
