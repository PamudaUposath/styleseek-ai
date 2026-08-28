'use client';

import React from 'react';
import { RecommendedProduct } from '@styleseek/shared';
import { Sparkles, CheckCircle2, Tag, ArrowUpRight } from 'lucide-react';

interface RecommendationCardProps {
  product: RecommendedProduct;
}

export const RecommendationCard: React.FC<RecommendationCardProps> = ({ product }) => {
  // Determine vibrant gradient header visuals based on product color theme
  const getProductVisualGradient = () => {
    const mainCol = (product.colours[0] || '').toLowerCase();
    if (mainCol.includes('black') || mainCol.includes('charcoal')) return 'from-gray-900 via-slate-900 to-black border-gray-700/50';
    if (mainCol.includes('white') || mainCol.includes('cream')) return 'from-slate-800 via-gray-900 to-slate-950 border-slate-600/50';
    if (mainCol.includes('blue') || mainCol.includes('navy') || mainCol.includes('indigo')) return 'from-blue-950 via-indigo-950 to-slate-950 border-blue-500/30';
    if (mainCol.includes('red') || mainCol.includes('burgundy')) return 'from-rose-950 via-red-950 to-slate-950 border-rose-500/30';
    if (mainCol.includes('pink')) return 'from-pink-950 via-rose-950 to-slate-950 border-pink-500/30';
    if (mainCol.includes('green') || mainCol.includes('olive') || mainCol.includes('emerald')) return 'from-emerald-950 via-teal-950 to-slate-950 border-emerald-500/30';
    if (mainCol.includes('beige') || mainCol.includes('khaki') || mainCol.includes('sand')) return 'from-amber-950 via-stone-900 to-slate-950 border-amber-500/30';
    return 'from-purple-950 via-indigo-950 to-slate-950 border-purple-500/30';
  };

  return (
    <div className="glass-card rounded-3xl overflow-hidden flex flex-col h-full border border-white/10 hover:border-cyan-400/50 transition-all duration-300 group shadow-xl hover:shadow-2xl hover:shadow-cyan-500/10">
      {/* Banner Visual Header */}
      <div className={`relative h-48 bg-gradient-to-br ${getProductVisualGradient()} p-5 flex flex-col justify-between overflow-hidden border-b`}>
        <div className="flex items-center justify-between z-10">
          <span className="px-3 py-1 rounded-full text-[11px] font-extrabold uppercase tracking-wider bg-black/60 text-cyan-300 backdrop-blur-md border border-cyan-500/30 shadow-md">
            {product.category}
          </span>
          <span className="px-3 py-1 rounded-full text-[11px] font-bold bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 flex items-center gap-1.5 backdrop-blur-md">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
            In Stock ({product.quantity})
          </span>
        </div>

        {/* Minimalist Graphic Watermark */}
        <div className="absolute inset-0 flex items-center justify-center opacity-15 group-hover:scale-110 group-hover:opacity-25 transition-all duration-500">
          <Tag className="w-28 h-28 text-white" />
        </div>

        {/* Price Tag Footer inside Header */}
        <div className="z-10 mt-auto flex items-end justify-between">
          <div>
            <div className="text-2xl font-black text-white tracking-tight drop-shadow-lg font-mono">
              LKR {product.price.toLocaleString()}
            </div>
            <div className="text-[10px] text-cyan-300/80 font-mono font-bold">
              ID: <span className="text-white">{product.id}</span>
            </div>
          </div>
          <div className="w-8 h-8 rounded-xl bg-white/10 backdrop-blur-md flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity">
            <ArrowUpRight className="w-4 h-4" />
          </div>
        </div>
      </div>

      {/* Card Content Body */}
      <div className="p-5 flex-1 flex flex-col justify-between bg-gray-950/40">
        <div>
          <h3 className="font-extrabold text-gray-100 text-base mb-2 group-hover:text-cyan-300 transition-colors line-clamp-1">
            {product.name}
          </h3>

          <p className="text-xs text-gray-400 mb-4 line-clamp-2 leading-relaxed">
            {product.description}
          </p>

          {/* AI Reason Rationale Callout */}
          <div className="p-3.5 rounded-2xl bg-cyan-950/30 border border-cyan-500/20 mb-4 shadow-inner">
            <div className="flex items-center gap-1.5 text-[11px] font-extrabold text-cyan-300 mb-1.5 uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5 text-cyan-400 animate-pulse" />
              AI Recommendation Reason
            </div>
            <p className="text-xs text-cyan-100 italic leading-snug">
              "{product.recommendationReason}"
            </p>
          </div>
        </div>

        {/* Attributes Footer */}
        <div className="pt-3.5 border-t border-gray-800/80 flex flex-col gap-2 text-xs text-gray-300 font-medium">
          <div className="flex items-center justify-between">
            <span className="text-gray-400 text-[11px]">Colours:</span>
            <div className="flex gap-1.5">
              {product.colours.map((c, i) => (
                <span
                  key={i}
                  className="px-2 py-0.5 rounded-lg bg-gray-900 text-gray-200 font-semibold text-[11px] border border-gray-800"
                >
                  {c}
                </span>
              ))}
            </div>
          </div>

          <div className="flex items-center justify-between">
            <span className="text-gray-400 text-[11px]">Sizes:</span>
            <div className="flex gap-1">
              {product.sizes.map((s, i) => (
                <span
                  key={i}
                  className="px-1.5 py-0.5 rounded bg-gray-800/80 text-cyan-300 font-mono text-[10px] border border-white/5"
                >
                  {s}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
