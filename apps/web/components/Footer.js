'use client';
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Footer = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const lucide_react_1 = require("lucide-react");
const Footer = () => {
    return ((0, jsx_runtime_1.jsx)("footer", { className: "border-t border-gray-800 bg-surface/40 py-12 px-4 mt-20", children: (0, jsx_runtime_1.jsxs)("div", { className: "max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 text-xs text-gray-400", children: [(0, jsx_runtime_1.jsxs)("div", { className: "flex items-center gap-2", children: [(0, jsx_runtime_1.jsx)("div", { className: "w-7 h-7 rounded-lg bg-indigo-600 flex items-center justify-center text-white", children: (0, jsx_runtime_1.jsx)(lucide_react_1.Sparkles, { className: "w-4 h-4" }) }), (0, jsx_runtime_1.jsx)("span", { className: "font-bold text-gray-200 text-sm", children: "StyleSeek AI" }), (0, jsx_runtime_1.jsx)("span", { children: "\u2014 Fashion Discovery Assistant" })] }), (0, jsx_runtime_1.jsxs)("div", { className: "text-center md:text-right text-gray-500 space-y-1", children: [(0, jsx_runtime_1.jsx)("p", { children: "Built with Amazon Bedrock, Amazon Nova, AWS Lambda, API Gateway & Next.js 16.3.3" }), (0, jsx_runtime_1.jsxs)("p", { children: ["\u00A9 ", new Date().getFullYear(), " StyleSeek AI. Standalone Fashion AI Demonstration."] })] })] }) }));
};
exports.Footer = Footer;
//# sourceMappingURL=Footer.js.map