'use client';

import React from 'react';
import { Sparkles } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="border-t border-gray-800 bg-surface/40 py-12 px-4 mt-20">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 text-xs text-gray-400">
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-lg bg-indigo-600 flex items-center justify-center text-white">
            <Sparkles className="w-4 h-4" />
          </div>
          <span className="font-bold text-gray-200 text-sm">StyleSeek AI</span>
          <span>— Fashion Discovery Assistant</span>
        </div>

        <div className="text-center md:text-right text-gray-500 space-y-1">
          <p>Built with Amazon Bedrock, Amazon Nova, AWS Lambda, API Gateway & Next.js 16.3.3</p>
          <p>© {new Date().getFullYear()} StyleSeek AI. Standalone Fashion AI Demonstration.</p>
        </div>
      </div>
    </footer>
  );
};
