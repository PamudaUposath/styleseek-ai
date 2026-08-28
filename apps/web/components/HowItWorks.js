'use client';
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HowItWorks = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const lucide_react_1 = require("lucide-react");
const HowItWorks = () => {
    const steps = [
        {
            icon: lucide_react_1.MessageSquare,
            title: '1. User Request',
            description: 'Describe clothing needs in natural language, specifying budget, colour, size, or occasion.',
            color: 'from-indigo-500 to-blue-600'
        },
        {
            icon: lucide_react_1.Filter,
            title: '2. Deterministic Backend Filtering',
            description: 'NestJS backend parses hard rules (e.g. max budget under LKR 3,000) and filters available candidates first.',
            color: 'from-purple-500 to-indigo-600'
        },
        {
            icon: lucide_react_1.Cpu,
            title: '3. Amazon Bedrock & Nova Inference',
            description: 'Amazon Nova analyzes style intent and matches candidates securely via Converse API.',
            color: 'from-pink-500 to-purple-600'
        },
        {
            icon: lucide_react_1.CheckCircle,
            title: '4. Catalogue Validation',
            description: 'Backend validates every returned product ID, purges out-of-stock items, and returns real products.',
            color: 'from-emerald-500 to-teal-600'
        }
    ];
    return ((0, jsx_runtime_1.jsxs)("section", { className: "py-16 px-4 max-w-7xl mx-auto border-t border-gray-800/60", children: [(0, jsx_runtime_1.jsxs)("div", { className: "text-center mb-12", children: [(0, jsx_runtime_1.jsx)("h2", { className: "text-3xl font-extrabold text-white tracking-tight mb-2", children: "How StyleSeek AI Works" }), (0, jsx_runtime_1.jsx)("p", { className: "text-sm text-gray-400 max-w-lg mx-auto", children: "Combining deterministic backend safeguards with Amazon Bedrock generative AI for accurate fashion recommendations." })] }), (0, jsx_runtime_1.jsx)("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6", children: steps.map((step, index) => {
                    const Icon = step.icon;
                    return ((0, jsx_runtime_1.jsx)("div", { className: "glass-card rounded-2xl p-6 border border-gray-800 flex flex-col justify-between relative overflow-hidden group hover:border-indigo-500/30 transition-all", children: (0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsx)("div", { className: `w-12 h-12 rounded-xl bg-gradient-to-tr ${step.color} flex items-center justify-center text-white mb-4 shadow-lg`, children: (0, jsx_runtime_1.jsx)(Icon, { className: "w-6 h-6" }) }), (0, jsx_runtime_1.jsx)("h3", { className: "font-bold text-white text-base mb-2", children: step.title }), (0, jsx_runtime_1.jsx)("p", { className: "text-xs text-gray-400 leading-relaxed", children: step.description })] }) }, index));
                }) })] }));
};
exports.HowItWorks = HowItWorks;
//# sourceMappingURL=HowItWorks.js.map