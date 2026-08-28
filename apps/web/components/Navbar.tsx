'use client';

import React from 'react';
import { Sparkles, ShoppingBag, Cpu } from 'lucide-react';

export const Navbar: React.FC = () => {
  return (
    <header className="sticky top-0 z-50 glass-panel border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-indigo-600 via-purple-600 to-pink-500 flex items-center justify-center shadow-lg shadow-indigo-500/20">
            <Sparkles className="w-5 h-5 text-white" />
          </div>
          <div>
            <span className="text-xl font-bold tracking-tight text-white flex items-center gap-1.5">
              StyleSeek <span className="text-gradient">AI</span>
            </span>
            <span className="block text-[10px] text-gray-400 font-medium tracking-wider uppercase">
              Powered by Amazon Bedrock & Nova
            </span>
          </div>
        </div>

        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-300">
          <a href="#assistant" className="hover:text-indigo-400 transition-colors flex items-center gap-1.5">
            <Sparkles className="w-4 h-4 text-indigo-400" />
            AI Assistant
          </a>
          <a href="#catalogue" className="hover:text-indigo-400 transition-colors flex items-center gap-1.5">
            <ShoppingBag className="w-4 h-4 text-purple-400" />
            Collection
          </a>
          <a href="#architecture" className="hover:text-indigo-400 transition-colors flex items-center gap-1.5">
            <Cpu className="w-4 h-4 text-pink-400" />
            AWS Tech Stack
          </a>
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="#assistant"
            className="px-4 py-2 text-xs font-semibold rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white transition-all shadow-md shadow-indigo-600/30 flex items-center gap-1.5"
          >
            <Sparkles className="w-3.5 h-3.5" />
            Try Assistant
          </a>
        </div>
      </div>
    </header>
  );
};
