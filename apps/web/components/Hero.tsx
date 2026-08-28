'use client';

import React from 'react';
import { Sparkles, ArrowRight, ShieldCheck, Zap, Layers, Activity } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section className="relative pt-16 pb-12 md:pt-24 md:pb-16 overflow-hidden">
      {/* Dynamic Radiant Mesh Background Elements */}
      <div className="ambient-glow-1" />
      <div className="ambient-glow-2" />
      <div className="ambient-glow-3" />

      <div className="max-w-6xl mx-auto px-4 text-center relative z-10">
        {/* Holographic Badge */}
        <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full glass-card text-xs font-bold text-cyan-300 border border-cyan-500/30 mb-8 shadow-xl shadow-cyan-500/10 backdrop-blur-xl">
          <Zap className="w-4 h-4 text-amber-400 animate-bounce" />
          <span className="tracking-wider uppercase">Standalone AI Fashion Discovery Assistant</span>
          <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-ping" />
          <span className="text-purple-300 font-mono">Amazon Nova & Bedrock</span>
        </div>

        {/* Uncommon Glowing Headline */}
        <h1 className="text-4xl sm:text-7xl font-black tracking-tight text-white mb-6 leading-[1.1] font-mono">
          Neural Fashion Discovery <br />
          <span className="text-gradient">With Amazon Nova AI</span>
        </h1>

        <p className="max-w-2xl mx-auto text-base sm:text-lg text-gray-300 mb-10 leading-relaxed font-normal">
          Describe your occasion, budget ceiling, or preferred colors in natural language. StyleSeek AI uses Amazon Nova via the Bedrock Converse API with a deterministic rule engine to return verified Sri Lankan fashion items in LKR.
        </p>

        {/* Action Button Row */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-14">
          <a
            href="#assistant"
            className="px-7 py-4 rounded-2xl bg-gradient-to-r from-cyan-500 via-indigo-600 to-purple-600 hover:from-cyan-400 hover:to-purple-500 text-white font-bold text-sm transition-all shadow-xl shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:-translate-y-1 flex items-center gap-2.5 group border border-white/20"
          >
            <Sparkles className="w-4 h-4 text-cyan-200" />
            <span>Launch Neural Styling Assistant</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
          <a
            href="#catalogue"
            className="px-7 py-4 rounded-2xl glass-card text-gray-200 font-bold text-sm hover:text-white transition-all border border-white/10 hover:border-purple-400/50 hover:bg-purple-950/20"
          >
            Explore Catalogue (30 Products in LKR)
          </a>
        </div>

        {/* Live Feature Badges Matrix */}
        <div className="pt-8 border-t border-white/10 max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs font-semibold text-gray-300">
          <div className="glass-card p-4 rounded-2xl flex items-center justify-center gap-3 border-emerald-500/20 bg-emerald-950/10">
            <ShieldCheck className="w-5 h-5 text-emerald-400 flex-shrink-0" />
            <div className="text-left">
              <span className="block text-white font-bold text-xs">Zero AI Hallucinations</span>
              <span className="text-[10px] text-gray-400 font-normal">Strict Backend Catalogue Validation</span>
            </div>
          </div>

          <div className="glass-card p-4 rounded-2xl flex items-center justify-center gap-3 border-cyan-500/20 bg-cyan-950/10">
            <Layers className="w-5 h-5 text-cyan-400 flex-shrink-0" />
            <div className="text-left">
              <span className="block text-white font-bold text-xs">Deterministic Rule Engine</span>
              <span className="text-[10px] text-gray-400 font-normal">Hard LKR Budget & Stock Protection</span>
            </div>
          </div>

          <div className="glass-card p-4 rounded-2xl flex items-center justify-center gap-3 border-purple-500/20 bg-purple-950/10">
            <Activity className="w-5 h-5 text-purple-400 flex-shrink-0" />
            <div className="text-left">
              <span className="block text-white font-bold text-xs">Converse API Memory</span>
              <span className="text-[10px] text-gray-400 font-normal">Multi-Turn Contextual Dialogues</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
