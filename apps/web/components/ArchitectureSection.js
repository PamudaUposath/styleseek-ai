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
            description: 'Provides secure runtime integration using official AWS SDK v3 Bedrock Runtime Converse API.',
            icon: lucide_react_1.Cpu,
            color: 'border-cyan-500/30 text-cyan-400'
        },
        {
            name: 'Amazon Nova',
            role: 'Language & Style Understanding',
            description: 'Understands natural language fashion requests, intent, and occasion context with multi-turn conversation support.',
            icon: lucide_react_1.Zap,
            color: 'border-purple-500/30 text-purple-400'
        },
        {
            name: 'AWS Lambda',
            role: 'Serverless NestJS Execution',
            description: 'Runs the NestJS backend as a serverless Lambda handler using @codegenie/serverless-express.',
            icon: lucide_react_1.Server,
            color: 'border-amber-500/30 text-amber-400'
        },
        {
            name: 'Amazon API Gateway',
            role: 'Managed HTTPS Gateway & Throttling',
            description: 'Exposes HTTP API endpoints with route-level rate (2/s) and burst (5) throttling.',
            icon: lucide_react_1.ShieldAlert,
            color: 'border-blue-500/30 text-blue-400'
        },
        {
            name: 'Amazon CloudWatch',
            role: 'Telemetry & Log Retention',
            description: 'Captures logs, request IDs, processing metrics, and safe error tracebacks with a 14-day log retention policy.',
            icon: lucide_react_1.Activity,
            color: 'border-emerald-500/30 text-emerald-400'
        }
    ];
    return ((0, jsx_runtime_1.jsxs)("section", { id: "architecture", className: "py-20 px-4 max-w-7xl mx-auto border-t border-white/10 relative z-10", children: [(0, jsx_runtime_1.jsxs)("div", { className: "text-center mb-14", children: [(0, jsx_runtime_1.jsxs)("div", { className: "inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-card text-xs font-bold text-cyan-300 border border-cyan-500/30 mb-3 shadow-md", children: [(0, jsx_runtime_1.jsx)(lucide_react_1.Code2, { className: "w-4 h-4 text-cyan-400" }), (0, jsx_runtime_1.jsx)("span", { children: "Serverless & AI Architecture" })] }), (0, jsx_runtime_1.jsx)("h2", { className: "text-3xl sm:text-4xl font-black text-white tracking-tight font-mono mb-3", children: "AWS Cloud Serverless Infrastructure" }), (0, jsx_runtime_1.jsx)("p", { className: "text-xs sm:text-sm text-gray-400 max-w-xl mx-auto", children: "StyleSeek AI is built on serverless AWS cloud services following least-privilege security standards." })] }), (0, jsx_runtime_1.jsxs)("div", { className: "glass-panel rounded-3xl p-6 sm:p-10 mb-12 border border-white/10 shadow-2xl relative overflow-hidden", children: [(0, jsx_runtime_1.jsx)("div", { className: "absolute top-0 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" }), (0, jsx_runtime_1.jsx)("h3", { className: "text-xs font-mono uppercase tracking-widest text-cyan-300 mb-8 text-center font-bold", children: "\u26A1 End-to-End Request Pipeline" }), (0, jsx_runtime_1.jsxs)("div", { className: "flex flex-wrap items-center justify-center gap-3 text-xs text-gray-200", children: [(0, jsx_runtime_1.jsx)("div", { className: "px-4 py-2.5 rounded-2xl bg-gray-900 border border-gray-700 font-bold flex items-center gap-2 shadow-md", children: (0, jsx_runtime_1.jsx)("span", { children: "Next.js Web UI" }) }), (0, jsx_runtime_1.jsx)("span", { className: "text-cyan-400 font-black text-sm", children: "\u2794" }), (0, jsx_runtime_1.jsx)("div", { className: "px-4 py-2.5 rounded-2xl bg-cyan-950/80 border border-cyan-500/40 text-cyan-200 font-bold flex items-center gap-2 shadow-md", children: (0, jsx_runtime_1.jsx)("span", { children: "API Gateway (Throttled)" }) }), (0, jsx_runtime_1.jsx)("span", { className: "text-cyan-400 font-black text-sm", children: "\u2794" }), (0, jsx_runtime_1.jsx)("div", { className: "px-4 py-2.5 rounded-2xl bg-amber-950/80 border border-amber-500/40 text-amber-200 font-bold flex items-center gap-2 shadow-md", children: (0, jsx_runtime_1.jsx)("span", { children: "AWS Lambda (NestJS)" }) }), (0, jsx_runtime_1.jsx)("span", { className: "text-cyan-400 font-black text-sm", children: "\u2794" }), (0, jsx_runtime_1.jsx)("div", { className: "px-4 py-2.5 rounded-2xl bg-indigo-950/80 border border-indigo-500/40 text-indigo-200 font-bold flex items-center gap-2 shadow-md", children: (0, jsx_runtime_1.jsx)("span", { children: "Deterministic Filter" }) }), (0, jsx_runtime_1.jsx)("span", { className: "text-cyan-400 font-black text-sm", children: "\u2794" }), (0, jsx_runtime_1.jsx)("div", { className: "px-4 py-2.5 rounded-2xl bg-purple-950/80 border border-purple-500/40 text-purple-200 font-bold flex items-center gap-2 shadow-md", children: (0, jsx_runtime_1.jsx)("span", { children: "Bedrock (Converse API)" }) }), (0, jsx_runtime_1.jsx)("span", { className: "text-cyan-400 font-black text-sm", children: "\u2794" }), (0, jsx_runtime_1.jsx)("div", { className: "px-4 py-2.5 rounded-2xl bg-pink-950/80 border border-pink-500/40 text-pink-200 font-bold flex items-center gap-2 shadow-md", children: (0, jsx_runtime_1.jsx)("span", { children: "Amazon Nova" }) }), (0, jsx_runtime_1.jsx)("span", { className: "text-cyan-400 font-black text-sm", children: "\u2794" }), (0, jsx_runtime_1.jsx)("div", { className: "px-4 py-2.5 rounded-2xl bg-emerald-950/80 border border-emerald-500/40 text-emerald-200 font-bold flex items-center gap-2 shadow-md", children: (0, jsx_runtime_1.jsx)("span", { children: "Strict Validation" }) })] })] }), (0, jsx_runtime_1.jsx)("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6", children: awsServices.map((service, i) => {
                    const Icon = service.icon;
                    return ((0, jsx_runtime_1.jsxs)("div", { className: `glass-card rounded-3xl p-6 border ${service.color} hover:shadow-xl transition-all`, children: [(0, jsx_runtime_1.jsxs)("div", { className: "flex items-center gap-3.5 mb-4", children: [(0, jsx_runtime_1.jsx)("div", { className: "p-3 rounded-2xl bg-gray-900 border border-gray-800 shadow-md", children: (0, jsx_runtime_1.jsx)(Icon, { className: "w-5 h-5" }) }), (0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsx)("h4", { className: "font-extrabold text-white text-base font-mono", children: service.name }), (0, jsx_runtime_1.jsx)("span", { className: "text-[11px] text-gray-400 font-bold uppercase tracking-wider", children: service.role })] })] }), (0, jsx_runtime_1.jsx)("p", { className: "text-xs text-gray-300 leading-relaxed font-normal", children: service.description })] }, i));
                }) })] }));
};
exports.ArchitectureSection = ArchitectureSection;
//# sourceMappingURL=ArchitectureSection.js.map