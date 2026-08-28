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
    return ((0, jsx_runtime_1.jsxs)("section", { id: "catalogue", className: "py-16 px-4 max-w-7xl mx-auto border-t border-gray-800/60", children: [(0, jsx_runtime_1.jsxs)("div", { className: "flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4", children: [(0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsxs)("div", { className: "inline-flex items-center gap-2 px-3 py-1 rounded-full glass-card text-xs font-semibold text-purple-400 border border-purple-500/20 mb-2", children: [(0, jsx_runtime_1.jsx)(lucide_react_1.ShoppingBag, { className: "w-3.5 h-3.5" }), "Demonstration Fashion Catalogue"] }), (0, jsx_runtime_1.jsxs)("h2", { className: "text-3xl font-extrabold text-white tracking-tight", children: ["Available Collection (", products.length, " Items)"] }), (0, jsx_runtime_1.jsx)("p", { className: "text-sm text-gray-400 mt-1", children: "Real fashion catalogue serving as the single source of truth for AI recommendations." })] }), (0, jsx_runtime_1.jsx)("div", { className: "flex items-center gap-1.5 overflow-x-auto pb-2 scrollbar-none", children: categories.map(cat => ((0, jsx_runtime_1.jsx)("button", { onClick: () => setSelectedCategory(cat), className: `px-3.5 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-all ${selectedCategory === cat
                                ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/20'
                                : 'glass-card text-gray-400 hover:text-white'}`, children: cat }, cat))) })] }), loading ? ((0, jsx_runtime_1.jsx)("div", { className: "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6", children: [1, 2, 3, 4, 5, 6, 7, 8].map(i => ((0, jsx_runtime_1.jsx)("div", { className: "glass-card h-64 rounded-2xl animate-pulse" }, i))) })) : ((0, jsx_runtime_1.jsx)("div", { className: "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6", children: filteredProducts.map(product => ((0, jsx_runtime_1.jsxs)("div", { className: "glass-card rounded-2xl p-5 border border-gray-800 hover:border-purple-500/40 transition-all flex flex-col justify-between group", children: [(0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsxs)("div", { className: "flex items-center justify-between mb-3 text-xs", children: [(0, jsx_runtime_1.jsx)("span", { className: "px-2 py-0.5 rounded-md bg-gray-800 text-gray-300 font-mono text-[10px]", children: product.id }), (0, jsx_runtime_1.jsx)("span", { className: `px-2 py-0.5 rounded-md text-[10px] font-semibold ${product.stockStatus === 'IN_STOCK'
                                                ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20'
                                                : 'bg-red-500/10 text-red-400 border border-red-500/20'}`, children: product.stockStatus === 'IN_STOCK' ? `In Stock (${product.quantity})` : 'Out of Stock' })] }), (0, jsx_runtime_1.jsx)("h4", { className: "font-bold text-white text-sm mb-1 group-hover:text-purple-300 transition-colors line-clamp-1", children: product.name }), (0, jsx_runtime_1.jsx)("p", { className: "text-xs text-gray-400 line-clamp-2 mb-3 leading-relaxed", children: product.description })] }), (0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsxs)("div", { className: "text-lg font-extrabold text-white mb-3", children: ["LKR ", product.price.toLocaleString()] }), (0, jsx_runtime_1.jsxs)("div", { className: "flex flex-wrap gap-1 text-[10px] text-gray-400", children: [(0, jsx_runtime_1.jsx)("span", { className: "px-2 py-0.5 rounded bg-surface-border text-gray-300 font-medium", children: product.category }), (0, jsx_runtime_1.jsx)("span", { className: "px-2 py-0.5 rounded bg-surface-border text-gray-300", children: product.colours.join(', ') })] })] })] }, product.id))) }))] }));
};
exports.FeaturedProducts = FeaturedProducts;
//# sourceMappingURL=FeaturedProducts.js.map