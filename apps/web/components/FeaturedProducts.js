'use client';
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FeaturedProducts = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const api_client_1 = require("../lib/api-client");
const lucide_react_1 = require("lucide-react");
const FeaturedProducts = () => {
    const [products, setProducts] = (0, react_1.useState)([]);
    const [selectedCategory, setSelectedCategory] = (0, react_1.useState)('All');
    const [loading, setLoading] = (0, react_1.useState)(true);
    (0, react_1.useEffect)(() => {
        (0, api_client_1.fetchProducts)().then(data => {
            setProducts(data);
            setLoading(false);
        });
    }, []);
    const categories = ['All', 'T-Shirts', 'Shirts', 'Hoodies', 'Jeans', 'Trousers', 'Shorts', 'Dresses', 'Jackets', 'Accessories'];
    const filteredProducts = selectedCategory === 'All'
        ? products
        : products.filter(p => p.category === selectedCategory);
    return ((0, jsx_runtime_1.jsxs)("section", { id: "catalogue", className: "py-20 px-4 max-w-7xl mx-auto border-t border-white/10 relative z-10", children: [(0, jsx_runtime_1.jsxs)("div", { className: "flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6", children: [(0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsxs)("div", { className: "inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-card text-xs font-bold text-purple-300 border border-purple-500/30 mb-3 shadow-md", children: [(0, jsx_runtime_1.jsx)(lucide_react_1.ShoppingBag, { className: "w-4 h-4 text-purple-400" }), (0, jsx_runtime_1.jsx)("span", { children: "Single Source of Truth Catalogue" })] }), (0, jsx_runtime_1.jsxs)("h2", { className: "text-3xl sm:text-4xl font-black text-white tracking-tight font-mono", children: ["Available Fashion Collection (", products.length, " Items)"] }), (0, jsx_runtime_1.jsx)("p", { className: "text-xs sm:text-sm text-gray-400 mt-2 max-w-xl", children: "Real Sri Lankan fashion catalogue in LKR. All AI responses are deterministically validated against these items." })] }), (0, jsx_runtime_1.jsx)("div", { className: "flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none max-w-full", children: categories.map(cat => ((0, jsx_runtime_1.jsx)("button", { onClick: () => setSelectedCategory(cat), className: `px-4 py-2 rounded-2xl text-xs font-extrabold tracking-wider whitespace-nowrap transition-all uppercase ${selectedCategory === cat
                                ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white shadow-lg shadow-purple-500/25 border border-white/20'
                                : 'glass-card text-gray-400 hover:text-white border-white/10 hover:border-purple-500/40'}`, children: cat }, cat))) })] }), loading ? ((0, jsx_runtime_1.jsx)("div", { className: "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6", children: [1, 2, 3, 4, 5, 6, 7, 8].map(i => ((0, jsx_runtime_1.jsx)("div", { className: "glass-card h-72 rounded-3xl animate-pulse border-white/10" }, i))) })) : ((0, jsx_runtime_1.jsx)("div", { className: "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6", children: filteredProducts.map(product => ((0, jsx_runtime_1.jsxs)("div", { className: "glass-card rounded-3xl p-5 border border-white/10 hover:border-purple-400/50 transition-all flex flex-col justify-between group shadow-lg hover:shadow-purple-500/10", children: [(0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsxs)("div", { className: "flex items-center justify-between mb-3 text-xs", children: [(0, jsx_runtime_1.jsx)("span", { className: "px-2.5 py-1 rounded-xl bg-gray-900 text-cyan-300 font-mono text-[10px] font-bold border border-gray-800", children: product.id }), (0, jsx_runtime_1.jsx)("span", { className: `px-2.5 py-1 rounded-xl text-[10px] font-bold flex items-center gap-1 ${product.stockStatus === 'IN_STOCK'
                                                ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40'
                                                : 'bg-rose-500/20 text-rose-300 border border-rose-500/40'}`, children: product.stockStatus === 'IN_STOCK' ? ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)(lucide_react_1.CheckCircle2, { className: "w-3 h-3 text-emerald-400" }), (0, jsx_runtime_1.jsxs)("span", { children: ["In Stock (", product.quantity, ")"] })] })) : ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)(lucide_react_1.XCircle, { className: "w-3 h-3 text-rose-400" }), (0, jsx_runtime_1.jsx)("span", { children: "Out of Stock" })] })) })] }), (0, jsx_runtime_1.jsx)("h4", { className: "font-extrabold text-white text-sm mb-1.5 group-hover:text-purple-300 transition-colors line-clamp-1", children: product.name }), (0, jsx_runtime_1.jsx)("p", { className: "text-xs text-gray-400 line-clamp-2 mb-4 leading-relaxed", children: product.description })] }), (0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsxs)("div", { className: "text-xl font-black text-white mb-3 font-mono drop-shadow-md", children: ["LKR ", product.price.toLocaleString()] }), (0, jsx_runtime_1.jsxs)("div", { className: "flex flex-wrap gap-1.5 text-[10px] text-gray-300 font-medium", children: [(0, jsx_runtime_1.jsx)("span", { className: "px-2.5 py-1 rounded-lg bg-gray-900/80 text-gray-200 font-semibold border border-gray-800", children: product.category }), (0, jsx_runtime_1.jsx)("span", { className: "px-2.5 py-1 rounded-lg bg-gray-900/80 text-gray-300 border border-gray-800", children: product.colours.join(', ') })] })] })] }, product.id))) }))] }));
};
exports.FeaturedProducts = FeaturedProducts;
//# sourceMappingURL=FeaturedProducts.js.map