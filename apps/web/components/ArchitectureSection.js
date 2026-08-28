'use client';
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ArchitectureSection = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const lucide_react_1 = require("lucide-react");
const ArchitectureSection = () => {
    const awsServices = [
        {
            name: 'Amazon Bedrock',
            role: 'Generative AI Platform',
            description: 'Provides secure, managed access to Amazon Nova foundation models via official AWS SDK v3 Bedrock Runtime Converse API.',
            icon: lucide_react_1.Cpu,
            color: 'border-indigo-500/30 text-indigo-400'
        },
        {
            name: 'Amazon Nova',
            role: 'Language & Style Understanding',
            description: 'Understands natural language fashion requests, intent, occasion, and ranks candidate products dynamically.',
            icon: lucide_react_1.Zap,
            color: 'border-purple-500/30 text-purple-400'
        },
        {
            name: 'AWS Lambda',
            role: 'Serverless NestJS Execution',
            description: 'Runs the NestJS backend as a serverless Lambda handler using @codegenie/serverless-express with zero static server management.',
            icon: lucide_react_1.Server,
            color: 'border-amber-500/30 text-amber-400'
        },
        {
            name: 'Amazon API Gateway',
            role: 'Managed HTTPS Gateway & Throttling',
            description: 'Exposes HTTP API endpoints with route-level rate and burst throttling to prevent abuse.',
            icon: lucide_react_1.ShieldAlert,
            color: 'border-cyan-500/30 text-cyan-400'
        },
        {
            name: 'Amazon CloudWatch',
            role: 'Logging & Telemetry',
            description: 'Monitors application execution, request IDs, processing duration, and safe error tracebacks with defined log retention.',
            icon: lucide_react_1.Activity,
            color: 'border-emerald-500/30 text-emerald-400'
        }
    ];
    return ((0, jsx_runtime_1.jsxs)("section", { id: "architecture", className: "py-16 px-4 max-w-7xl mx-auto border-t border-gray-800/60", children: [(0, jsx_runtime_1.jsxs)("div", { className: "text-center mb-12", children: [(0, jsx_runtime_1.jsxs)("div", { className: "inline-flex items-center gap-2 px-3 py-1 rounded-full glass-card text-xs font-semibold text-cyan-400 border border-cyan-500/20 mb-3", children: [(0, jsx_runtime_1.jsx)(lucide_react_1.Code2, { className: "w-3.5 h-3.5" }), "Serverless & AI Architecture"] }), (0, jsx_runtime_1.jsx)("h2", { className: "text-3xl font-extrabold text-white tracking-tight mb-2", children: "AWS Cloud Architecture" }), (0, jsx_runtime_1.jsx)("p", { className: "text-sm text-gray-400 max-w-xl mx-auto", children: "StyleSeek AI is built on modern AWS cloud services following least-privilege security and serverless best practices." })] }), (0, jsx_runtime_1.jsxs)("div", { className: "glass-panel rounded-3xl p-6 sm:p-8 mb-12 border border-gray-800 shadow-xl", children: [(0, jsx_runtime_1.jsx)("h3", { className: "text-xs font-mono uppercase tracking-wider text-indigo-400 mb-6 text-center", children: "End-to-End System Request Flow" }), (0, jsx_runtime_1.jsxs)("div", { className: "flex flex-wrap items-center justify-center gap-3 text-xs text-gray-300", children: [(0, jsx_runtime_1.jsx)("div", { className: "px-4 py-2.5 rounded-xl bg-gray-900 border border-gray-700 font-semibold flex items-center gap-2", children: (0, jsx_runtime_1.jsx)("span", { children: "Next.js Web UI" }) }), (0, jsx_runtime_1.jsx)("span", { className: "text-indigo-400 font-bold", children: "\u2794" }), (0, jsx_runtime_1.jsx)("div", { className: "px-4 py-2.5 rounded-xl bg-cyan-950/60 border border-cyan-700/50 text-cyan-200 font-semibold flex items-center gap-2", children: (0, jsx_runtime_1.jsx)("span", { children: "API Gateway (Throttled)" }) }), (0, jsx_runtime_1.jsx)("span", { className: "text-indigo-400 font-bold", children: "\u2794" }), (0, jsx_runtime_1.jsx)("div", { className: "px-4 py-2.5 rounded-xl bg-amber-950/60 border border-amber-700/50 text-amber-200 font-semibold flex items-center gap-2", children: (0, jsx_runtime_1.jsx)("span", { children: "AWS Lambda (NestJS)" }) }), (0, jsx_runtime_1.jsx)("span", { className: "text-indigo-400 font-bold", children: "\u2794" }), (0, jsx_runtime_1.jsx)("div", { className: "px-4 py-2.5 rounded-xl bg-indigo-950/60 border border-indigo-700/50 text-indigo-200 font-semibold flex items-center gap-2", children: (0, jsx_runtime_1.jsx)("span", { children: "Deterministic Filter" }) }), (0, jsx_runtime_1.jsx)("span", { className: "text-indigo-400 font-bold", children: "\u2794" }), (0, jsx_runtime_1.jsx)("div", { className: "px-4 py-2.5 rounded-xl bg-purple-950/60 border border-purple-700/50 text-purple-200 font-semibold flex items-center gap-2", children: (0, jsx_runtime_1.jsx)("span", { children: "Bedrock (Converse API)" }) }), (0, jsx_runtime_1.jsx)("span", { className: "text-indigo-400 font-bold", children: "\u2794" }), (0, jsx_runtime_1.jsx)("div", { className: "px-4 py-2.5 rounded-xl bg-pink-950/60 border border-pink-700/50 text-pink-200 font-semibold flex items-center gap-2", children: (0, jsx_runtime_1.jsx)("span", { children: "Amazon Nova" }) }), (0, jsx_runtime_1.jsx)("span", { className: "text-indigo-400 font-bold", children: "\u2794" }), (0, jsx_runtime_1.jsx)("div", { className: "px-4 py-2.5 rounded-xl bg-emerald-950/60 border border-emerald-700/50 text-emerald-200 font-semibold flex items-center gap-2", children: (0, jsx_runtime_1.jsx)("span", { children: "Strict Validation" }) })] })] }), (0, jsx_runtime_1.jsx)("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6", children: awsServices.map((service, i) => {
                    const Icon = service.icon;
                    return ((0, jsx_runtime_1.jsxs)("div", { className: `glass-card rounded-2xl p-6 border ${service.color}`, children: [(0, jsx_runtime_1.jsxs)("div", { className: "flex items-center gap-3 mb-3", children: [(0, jsx_runtime_1.jsx)("div", { className: "p-2.5 rounded-xl bg-gray-900 border border-gray-800", children: (0, jsx_runtime_1.jsx)(Icon, { className: "w-5 h-5" }) }), (0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsx)("h4", { className: "font-bold text-white text-sm", children: service.name }), (0, jsx_runtime_1.jsx)("span", { className: "text-[11px] text-gray-400 font-medium", children: service.role })] })] }), (0, jsx_runtime_1.jsx)("p", { className: "text-xs text-gray-400 leading-relaxed", children: service.description })] }, i));
                }) })] }));
};
exports.ArchitectureSection = ArchitectureSection;
//# sourceMappingURL=ArchitectureSection.js.map