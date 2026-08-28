'use client';

import React from 'react';
import { RecommendedProduct } from '@styleseek/shared';
import { Sparkles, CheckCircle2, Tag } from 'lucide-react';

interface RecommendationCardProps {
  product: RecommendedProduct;
}

export const RecommendationCard: React.FC<RecommendationCardProps> = ({ product }) => {
  // Determine gradient header colors based on category/colour for demo visuals
  const getProductVisualGradient = () => {
    const mainCol = (product.colours[0] || '').toLowerCase();
    if (mainCol.includes('black') || mainCol.includes('charcoal')) return 'from-gray-800 to-black';
    if (mainCol.includes('white') || mainCol.includes('cream')) return 'from-gray-700 to-gray-900';
    if (mainCol.includes('blue') || mainCol.includes('navy') || mainCol.includes('indigo')) return 'from-blue-900 to-indigo-950';
    if (mainCol.includes('red') || mainCol.includes('burgundy')) return 'from-rose-900 to-red-950';
    if (mainCol.includes('pink')) return 'from-pink-900 to-rose-950';
    if (mainCol.includes('green') || mainCol.includes('olive') || mainCol.includes('emerald')) return 'from-emerald-900 to-teal-950';
    if (mainCol.includes('beige') || mainCol.includes('khaki') || mainCol.includes('sand')) return 'from-amber-900 to-stone-900';
    return 'from-indigo-900 to-purple-950';
  };

  return (
    <div className="glass-card rounded-2xl overflow-hidden flex flex-col h-full border border-gray-800 hover:border-indigo-500/50 transition-all duration-300 group">
      {/* Visual Product Banner */}
      <div className={`relative h-44 bg-gradient-to-br ${getProductVisualGradient()} p-4 flex flex-col justify-between overflow-hidden`}>
        <div className="flex items-center justify-between z-10">
          <span className="px-2.5 py-1 rounded-full text-[11px] font-semibold bg-black/40 text-gray-200 backdrop-blur-md border border-white/10">
            {product.category}
          </span>
          <span className="px-2.5 py-1 rounded-full text-[11px] font-semibold bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 flex items-center gap-1">
            <CheckCircle2 className="w-3 h-3" />
            In Stock ({product.quantity})
          </span>
        </div>

        {/* Minimalist Graphic Icon */}
        <div className="absolute inset-0 flex items-center justify-center opacity-25 group-hover:scale-110 group-hover:opacity-35 transition-all duration-500">
          <Tag className="w-24 h-24 text-white" />
        </div>

        <div className="z-10 mt-auto">
          <div className="text-2xl font-extrabold text-white tracking-tight drop-shadow-md">
            LKR {product.price.toLocaleString()}
          </div>
          <div className="text-[11px] text-gray-300 font-medium">
            ID: <span className="font-mono text-indigo-300">{product.id}</span>
          </div>
        </div>
      </div>

      {/* Card Content Body */}
      <div className="p-5 flex-1 flex flex-col justify-between bg-surface/50">
        <div>
          <h3 className="font-bold text-gray-100 text-base mb-2 group-hover:text-indigo-400 transition-colors line-clamp-1">
            {product.name}
          </h3>

          <p className="text-xs text-gray-400 mb-4 line-clamp-2 leading-relaxed">
            {product.description}
          </p>

          {/* AI Reason Rationale Badge */}
          <div className="p-3 rounded-xl bg-indigo-950/40 border border-indigo-500/20 mb-4">
            <div className="flex items-center gap-1.5 text-[11px] font-semibold text-indigo-300 mb-1">
              <Sparkles className="w-3.5 h-3.5 text-indigo-400" />
              AI Recommendation Reason
            </div>
            <p className="text-xs text-indigo-200 italic leading-snug">
              "{product.recommendationReason}"
            </p>
          </div>
        </div>

        {/* Product Attributes Footer */}
        <div className="pt-3 border-t border-gray-800/80 flex flex-col gap-2.5 text-xs text-gray-300">
          <div className="flex items-center justify-between">
            <span className="text-gray-400">Colours:</span>
            <div className="flex gap-1.5">
              {product.colours.map((c, i) => (
                <span
                  key={i}
                  className="px-2 py-0.5 rounded-md bg-gray-800 text-gray-200 font-medium text-[11px] border border-gray-700"
                >
                  {c}
                </span>
              ))}
            </div>
          </div>

          <div className="flex items-center justify-between">
            <span className="text-gray-400">Available Sizes:</span>
            <div className="flex gap-1">
              {product.sizes.map((s, i) => (
                <span
                  key={i}
                  className="px-1.5 py-0.5 rounded bg-surface-border text-gray-300 font-mono text-[10px]"
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
