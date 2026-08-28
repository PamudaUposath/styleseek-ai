'use client';
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RecommendationCard = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const lucide_react_1 = require("lucide-react");
const RecommendationCard = ({ product }) => {
    // Determine gradient header colors based on category/colour for demo visuals
    const getProductVisualGradient = () => {
        const mainCol = (product.colours[0] || '').toLowerCase();
        if (mainCol.includes('black') || mainCol.includes('charcoal'))
            return 'from-gray-800 to-black';
        if (mainCol.includes('white') || mainCol.includes('cream'))
            return 'from-gray-700 to-gray-900';
        if (mainCol.includes('blue') || mainCol.includes('navy') || mainCol.includes('indigo'))
            return 'from-blue-900 to-indigo-950';
        if (mainCol.includes('red') || mainCol.includes('burgundy'))
            return 'from-rose-900 to-red-950';
        if (mainCol.includes('pink'))
            return 'from-pink-900 to-rose-950';
        if (mainCol.includes('green') || mainCol.includes('olive') || mainCol.includes('emerald'))
            return 'from-emerald-900 to-teal-950';
        if (mainCol.includes('beige') || mainCol.includes('khaki') || mainCol.includes('sand'))
            return 'from-amber-900 to-stone-900';
        return 'from-indigo-900 to-purple-950';
    };
    return ((0, jsx_runtime_1.jsxs)("div", { className: "glass-card rounded-2xl overflow-hidden flex flex-col h-full border border-gray-800 hover:border-indigo-500/50 transition-all duration-300 group", children: [(0, jsx_runtime_1.jsxs)("div", { className: `relative h-44 bg-gradient-to-br ${getProductVisualGradient()} p-4 flex flex-col justify-between overflow-hidden`, children: [(0, jsx_runtime_1.jsxs)("div", { className: "flex items-center justify-between z-10", children: [(0, jsx_runtime_1.jsx)("span", { className: "px-2.5 py-1 rounded-full text-[11px] font-semibold bg-black/40 text-gray-200 backdrop-blur-md border border-white/10", children: product.category }), (0, jsx_runtime_1.jsxs)("span", { className: "px-2.5 py-1 rounded-full text-[11px] font-semibold bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 flex items-center gap-1", children: [(0, jsx_runtime_1.jsx)(lucide_react_1.CheckCircle2, { className: "w-3 h-3" }), "In Stock (", product.quantity, ")"] })] }), (0, jsx_runtime_1.jsx)("div", { className: "absolute inset-0 flex items-center justify-center opacity-25 group-hover:scale-110 group-hover:opacity-35 transition-all duration-500", children: (0, jsx_runtime_1.jsx)(lucide_react_1.Tag, { className: "w-24 h-24 text-white" }) }), (0, jsx_runtime_1.jsxs)("div", { className: "z-10 mt-auto", children: [(0, jsx_runtime_1.jsxs)("div", { className: "text-2xl font-extrabold text-white tracking-tight drop-shadow-md", children: ["LKR ", product.price.toLocaleString()] }), (0, jsx_runtime_1.jsxs)("div", { className: "text-[11px] text-gray-300 font-medium", children: ["ID: ", (0, jsx_runtime_1.jsx)("span", { className: "font-mono text-indigo-300", children: product.id })] })] })] }), (0, jsx_runtime_1.jsxs)("div", { className: "p-5 flex-1 flex flex-col justify-between bg-surface/50", children: [(0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsx)("h3", { className: "font-bold text-gray-100 text-base mb-2 group-hover:text-indigo-400 transition-colors line-clamp-1", children: product.name }), (0, jsx_runtime_1.jsx)("p", { className: "text-xs text-gray-400 mb-4 line-clamp-2 leading-relaxed", children: product.description }), (0, jsx_runtime_1.jsxs)("div", { className: "p-3 rounded-xl bg-indigo-950/40 border border-indigo-500/20 mb-4", children: [(0, jsx_runtime_1.jsxs)("div", { className: "flex items-center gap-1.5 text-[11px] font-semibold text-indigo-300 mb-1", children: [(0, jsx_runtime_1.jsx)(lucide_react_1.Sparkles, { className: "w-3.5 h-3.5 text-indigo-400" }), "AI Recommendation Reason"] }), (0, jsx_runtime_1.jsxs)("p", { className: "text-xs text-indigo-200 italic leading-snug", children: ["\"", product.recommendationReason, "\""] })] })] }), (0, jsx_runtime_1.jsxs)("div", { className: "pt-3 border-t border-gray-800/80 flex flex-col gap-2.5 text-xs text-gray-300", children: [(0, jsx_runtime_1.jsxs)("div", { className: "flex items-center justify-between", children: [(0, jsx_runtime_1.jsx)("span", { className: "text-gray-400", children: "Colours:" }), (0, jsx_runtime_1.jsx)("div", { className: "flex gap-1.5", children: product.colours.map((c, i) => ((0, jsx_runtime_1.jsx)("span", { className: "px-2 py-0.5 rounded-md bg-gray-800 text-gray-200 font-medium text-[11px] border border-gray-700", children: c }, i))) })] }), (0, jsx_runtime_1.jsxs)("div", { className: "flex items-center justify-between", children: [(0, jsx_runtime_1.jsx)("span", { className: "text-gray-400", children: "Available Sizes:" }), (0, jsx_runtime_1.jsx)("div", { className: "flex gap-1", children: product.sizes.map((s, i) => ((0, jsx_runtime_1.jsx)("span", { className: "px-1.5 py-0.5 rounded bg-surface-border text-gray-300 font-mono text-[10px]", children: s }, i))) })] })] })] })] }));
};
exports.RecommendationCard = RecommendationCard;
//# sourceMappingURL=RecommendationCard.js.map