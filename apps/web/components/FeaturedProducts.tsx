'use client';

import React, { useState, useEffect } from 'react';
import { Product } from '@styleseek/shared';
import { fetchProducts } from '../lib/api-client';
import { ShoppingBag, CheckCircle2, XCircle } from 'lucide-react';

export const FeaturedProducts: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    fetchProducts().then(data => {
      setProducts(data);
      setLoading(false);
    });
  }, []);

  const categories = ['All', 'T-Shirts', 'Shirts', 'Hoodies', 'Jeans', 'Trousers', 'Shorts', 'Dresses', 'Jackets', 'Accessories'];

  const filteredProducts = selectedCategory === 'All'
    ? products
    : products.filter(p => p.category === selectedCategory);

  return (
    <section id="catalogue" className="py-20 px-4 max-w-7xl mx-auto border-t border-white/10 relative z-10">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
        <div>
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-card text-xs font-bold text-purple-300 border border-purple-500/30 mb-3 shadow-md">
            <ShoppingBag className="w-4 h-4 text-purple-400" />
            <span>Single Source of Truth Catalogue</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight font-mono">
            Available Fashion Collection ({products.length} Items)
          </h2>
          <p className="text-xs sm:text-sm text-gray-400 mt-2 max-w-xl">
            Real Sri Lankan fashion catalogue in LKR. All AI responses are deterministically validated against these items.
          </p>
        </div>

        {/* Category Pill Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none max-w-full">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-2xl text-xs font-extrabold tracking-wider whitespace-nowrap transition-all uppercase ${
                selectedCategory === cat
                  ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white shadow-lg shadow-purple-500/25 border border-white/20'
                  : 'glass-card text-gray-400 hover:text-white border-white/10 hover:border-purple-500/40'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Grid */}
      {loading ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {[1, 2, 3, 4, 5, 6, 7, 8].map(i => (
            <div key={i} className="glass-card h-72 rounded-3xl animate-pulse border-white/10" />
          ))}
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredProducts.map(product => (
            <div
              key={product.id}
              className="glass-card rounded-3xl p-5 border border-white/10 hover:border-purple-400/50 transition-all flex flex-col justify-between group shadow-lg hover:shadow-purple-500/10"
            >
              <div>
                <div className="flex items-center justify-between mb-3 text-xs">
                  <span className="px-2.5 py-1 rounded-xl bg-gray-900 text-cyan-300 font-mono text-[10px] font-bold border border-gray-800">
                    {product.id}
                  </span>
                  <span
                    className={`px-2.5 py-1 rounded-xl text-[10px] font-bold flex items-center gap-1 ${
                      product.stockStatus === 'IN_STOCK'
                        ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40'
                        : 'bg-rose-500/20 text-rose-300 border border-rose-500/40'
                    }`}
                  >
                    {product.stockStatus === 'IN_STOCK' ? (
                      <>
                        <CheckCircle2 className="w-3 h-3 text-emerald-400" />
                        <span>In Stock ({product.quantity})</span>
                      </>
                    ) : (
                      <>
                        <XCircle className="w-3 h-3 text-rose-400" />
                        <span>Out of Stock</span>
                      </>
                    )}
                  </span>
                </div>

                <h4 className="font-extrabold text-white text-sm mb-1.5 group-hover:text-purple-300 transition-colors line-clamp-1">
                  {product.name}
                </h4>
                <p className="text-xs text-gray-400 line-clamp-2 mb-4 leading-relaxed">
                  {product.description}
                </p>
              </div>

              <div>
                <div className="text-xl font-black text-white mb-3 font-mono drop-shadow-md">
                  LKR {product.price.toLocaleString()}
                </div>

                <div className="flex flex-wrap gap-1.5 text-[10px] text-gray-300 font-medium">
                  <span className="px-2.5 py-1 rounded-lg bg-gray-900/80 text-gray-200 font-semibold border border-gray-800">
                    {product.category}
                  </span>
                  <span className="px-2.5 py-1 rounded-lg bg-gray-900/80 text-gray-300 border border-gray-800">
                    {product.colours.join(', ')}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
};
