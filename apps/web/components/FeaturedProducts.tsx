'use client';

import React, { useState, useEffect } from 'react';
import { Product } from '@styleseek/shared';
import { fetchProducts } from '../lib/api-client';
import { ShoppingBag, Tag, CheckCircle2 } from 'lucide-react';

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
    <section id="catalogue" className="py-16 px-4 max-w-7xl mx-auto border-t border-gray-800/60">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-card text-xs font-semibold text-purple-400 border border-purple-500/20 mb-2">
            <ShoppingBag className="w-3.5 h-3.5" />
            Demonstration Fashion Catalogue
          </div>
          <h2 className="text-3xl font-extrabold text-white tracking-tight">
            Available Collection ({products.length} Items)
          </h2>
          <p className="text-sm text-gray-400 mt-1">
            Real fashion catalogue serving as the single source of truth for AI recommendations.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-2 scrollbar-none">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-all ${
                selectedCategory === cat
                  ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/20'
                  : 'glass-card text-gray-400 hover:text-white'
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
            <div key={i} className="glass-card h-64 rounded-2xl animate-pulse" />
          ))}
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredProducts.map(product => (
            <div
              key={product.id}
              className="glass-card rounded-2xl p-5 border border-gray-800 hover:border-purple-500/40 transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-3 text-xs">
                  <span className="px-2 py-0.5 rounded-md bg-gray-800 text-gray-300 font-mono text-[10px]">
                    {product.id}
                  </span>
                  <span
                    className={`px-2 py-0.5 rounded-md text-[10px] font-semibold ${
                      product.stockStatus === 'IN_STOCK'
                        ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20'
                        : 'bg-red-500/10 text-red-400 border border-red-500/20'
                    }`}
                  >
                    {product.stockStatus === 'IN_STOCK' ? `In Stock (${product.quantity})` : 'Out of Stock'}
                  </span>
                </div>

                <h4 className="font-bold text-white text-sm mb-1 group-hover:text-purple-300 transition-colors line-clamp-1">
                  {product.name}
                </h4>
                <p className="text-xs text-gray-400 line-clamp-2 mb-3 leading-relaxed">
                  {product.description}
                </p>
              </div>

              <div>
                <div className="text-lg font-extrabold text-white mb-3">
                  LKR {product.price.toLocaleString()}
                </div>

                <div className="flex flex-wrap gap-1 text-[10px] text-gray-400">
                  <span className="px-2 py-0.5 rounded bg-surface-border text-gray-300 font-medium">
                    {product.category}
                  </span>
                  <span className="px-2 py-0.5 rounded bg-surface-border text-gray-300">
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
