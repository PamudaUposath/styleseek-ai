'use client';

import React from 'react';
import { Sparkles, ShoppingBag, ShieldCheck } from 'lucide-react';

export const Navbar: React.FC = () => {
  return (
    <header className="sticky top-0 z-50 glass-panel border-b border-white/10 backdrop-blur-2xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Brand Logo Header */}
        <div className="flex items-center gap-3.5 group cursor-pointer">
          <div className="w-11 h-11 rounded-2xl bg-gradient-to-tr from-cyan-500 via-indigo-600 to-purple-600 flex items-center justify-center shadow-xl shadow-cyan-500/20 group-hover:scale-105 transition-all duration-300 border border-white/20">
            <Sparkles className="w-6 h-6 text-white animate-pulse" />
          </div>
          <div className="flex flex-col">
            <span className="text-2xl font-black tracking-tight text-white flex items-center gap-1.5 font-mono">
              StyleSeek <span className="text-gradient">AI</span>
            </span>
            <span className="block text-[10px] text-cyan-300/80 font-bold tracking-widest uppercase">
              Amazon Bedrock & Nova Neural Discovery
            </span>
          </div>
        </div>

        {/* Navigation Links */}
        <nav className="hidden md:flex items-center gap-8 text-xs font-bold uppercase tracking-wider text-gray-300">
          <a href="#assistant" className="hover:text-cyan-400 transition-colors flex items-center gap-2 group">
            <Sparkles className="w-4 h-4 text-cyan-400 group-hover:rotate-12 transition-transform" />
            <span>AI Assistant</span>
          </a>
          <a href="#catalogue" className="hover:text-purple-400 transition-colors flex items-center gap-2 group">
            <ShoppingBag className="w-4 h-4 text-purple-400 group-hover:scale-110 transition-transform" />
            <span>Collection</span>
          </a>
        </nav>

        {/* Action Pills */}
        <div className="flex items-center gap-3">
          <div className="hidden lg:flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-emerald-500/10 text-emerald-300 border border-emerald-500/30 text-[11px] font-semibold">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Zero Hallucinations</span>
          </div>

          <a
            href="#assistant"
            className="px-5 py-2.5 text-xs font-bold rounded-xl bg-gradient-to-r from-cyan-500 via-indigo-600 to-purple-600 hover:from-cyan-400 hover:to-purple-500 text-white transition-all shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:-translate-y-0.5 flex items-center gap-2 border border-white/20"
          >
            <Sparkles className="w-4 h-4" />
            <span>Launch Assistant</span>
          </a>
        </div>
      </div>
    </header>
  );
};
