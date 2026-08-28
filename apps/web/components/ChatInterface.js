'use client';
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChatInterface = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const shared_1 = require("@styleseek/shared");
const api_client_1 = require("../lib/api-client");
const RecommendationCard_1 = require("./RecommendationCard");
const lucide_react_1 = require("lucide-react");
const ChatInterface = () => {
    const [messages, setMessages] = (0, react_1.useState)([]);
    const [inputMessage, setInputMessage] = (0, react_1.useState)('');
    const [isLoading, setIsLoading] = (0, react_1.useState)(false);
    const [error, setError] = (0, react_1.useState)(null);
    const chatContainerRef = (0, react_1.useRef)(null);
    const inputRef = (0, react_1.useRef)(null);
    // FIX: Scroll ONLY the inner chat messages container, NEVER the window page!
    const scrollToBottom = () => {
        if (chatContainerRef.current) {
            chatContainerRef.current.scrollTo({
                top: chatContainerRef.current.scrollHeight,
                behavior: 'smooth'
            });
        }
    };
    (0, react_1.useEffect)(() => {
        if (messages.length > 0 || isLoading) {
            scrollToBottom();
        }
    }, [messages, isLoading]);
    const handleSend = async (textToSend) => {
        const text = (textToSend || inputMessage).trim();
        if (!text || isLoading)
            return;
        setError(null);
        setInputMessage('');
        setIsLoading(true);
        const userMessageObj = {
            id: 'msg-' + Date.now(),
            role: 'user',
            content: text,
            timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        };
        setMessages(prev => [...prev, userMessageObj]);
        // Build recent history for context
        const historyPayload = messages.slice(-4).map(m => ({
            role: m.role,
            content: m.content
        }));
        try {
            const payload = {
                message: text,
                history: historyPayload
            };
            const response = await (0, api_client_1.requestRecommendations)(payload);
            const assistantMessageObj = {
                id: 'res-' + Date.now(),
                role: 'assistant',
                content: response.message,
                products: response.products,
                timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
            };
            setMessages(prev => [...prev, assistantMessageObj]);
        }
        catch (err) {
            console.error('Chat error:', err);
            setError(err.message || 'Something went wrong while finding recommendations.');
        }
        finally {
            setIsLoading(false);
        }
    };
    const handleKeyDown = (e) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            handleSend();
        }
    };
    const handleClear = () => {
        setMessages([]);
        setError(null);
    };
    return ((0, jsx_runtime_1.jsxs)("section", { id: "assistant", className: "py-16 px-4 max-w-6xl mx-auto relative z-10", children: [(0, jsx_runtime_1.jsxs)("div", { className: "text-center mb-10", children: [(0, jsx_runtime_1.jsxs)("div", { className: "inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-card text-xs font-semibold text-cyan-300 border border-cyan-500/30 mb-4 shadow-lg shadow-cyan-500/10", children: [(0, jsx_runtime_1.jsx)(lucide_react_1.Cpu, { className: "w-4 h-4 text-cyan-400 animate-pulse" }), (0, jsx_runtime_1.jsx)("span", { children: "NEURAL STYLING ENGINE ACTIVE" })] }), (0, jsx_runtime_1.jsxs)("h2", { className: "text-3xl sm:text-5xl font-black text-white tracking-tight mb-3", children: ["Ask ", (0, jsx_runtime_1.jsx)("span", { className: "text-gradient", children: "StyleSeek AI" }), " Assistant"] }), (0, jsx_runtime_1.jsx)("p", { className: "text-sm sm:text-base text-gray-400 max-w-xl mx-auto leading-relaxed", children: "Describe your preferred occasion, budget ceiling, or style choices in normal language. Our Amazon Nova engine delivers verified, available products in LKR." })] }), (0, jsx_runtime_1.jsxs)("div", { className: "glass-panel rounded-3xl border border-gray-800/80 shadow-2xl overflow-hidden flex flex-col min-h-[620px] max-h-[820px] relative", children: [(0, jsx_runtime_1.jsxs)("div", { className: "px-6 py-4 bg-gray-950/80 border-b border-gray-800/80 flex items-center justify-between backdrop-blur-xl", children: [(0, jsx_runtime_1.jsxs)("div", { className: "flex items-center gap-3", children: [(0, jsx_runtime_1.jsxs)("div", { className: "relative flex items-center justify-center", children: [(0, jsx_runtime_1.jsx)("div", { className: "w-3 h-3 rounded-full bg-emerald-500 animate-ping absolute" }), (0, jsx_runtime_1.jsx)("div", { className: "w-3 h-3 rounded-full bg-emerald-400" })] }), (0, jsx_runtime_1.jsxs)("div", { className: "flex flex-col", children: [(0, jsx_runtime_1.jsxs)("span", { className: "text-xs font-bold text-gray-100 tracking-wide uppercase flex items-center gap-1.5", children: [(0, jsx_runtime_1.jsx)(lucide_react_1.Zap, { className: "w-3.5 h-3.5 text-indigo-400" }), "Live Amazon Nova Discovery Session"] }), (0, jsx_runtime_1.jsx)("span", { className: "text-[10px] text-gray-400", children: "15s Real-Time Guardrails \u2022 Guaranteed LKR Catalogue Matching" })] })] }), messages.length > 0 && ((0, jsx_runtime_1.jsxs)("button", { onClick: handleClear, className: "px-3.5 py-1.5 rounded-xl text-xs font-semibold text-gray-400 hover:text-rose-400 hover:bg-rose-950/30 transition-all flex items-center gap-1.5 border border-gray-800 hover:border-rose-900/40", title: "Clear current conversation", children: [(0, jsx_runtime_1.jsx)(lucide_react_1.Trash2, { className: "w-3.5 h-3.5" }), (0, jsx_runtime_1.jsx)("span", { children: "Clear Session" })] }))] }), (0, jsx_runtime_1.jsxs)("div", { ref: chatContainerRef, className: "flex-1 overflow-y-auto p-4 sm:p-6 space-y-6 scroll-smooth", children: [messages.length === 0 && ((0, jsx_runtime_1.jsxs)("div", { className: "h-full flex flex-col items-center justify-center text-center py-12 px-4", children: [(0, jsx_runtime_1.jsxs)("div", { className: "w-20 h-20 rounded-3xl bg-gradient-to-tr from-cyan-600/20 via-indigo-600/20 to-purple-600/20 border border-cyan-500/30 flex items-center justify-center text-cyan-300 mb-6 shadow-2xl shadow-cyan-500/20 relative group", children: [(0, jsx_runtime_1.jsx)(lucide_react_1.Compass, { className: "w-10 h-10 group-hover:rotate-45 transition-transform duration-500" }), (0, jsx_runtime_1.jsx)("div", { className: "absolute -top-1 -right-1 w-4 h-4 rounded-full bg-cyan-400 animate-pulse" })] }), (0, jsx_runtime_1.jsx)("h3", { className: "text-xl font-extrabold text-white mb-2 tracking-tight", children: "What are you looking for today?" }), (0, jsx_runtime_1.jsx)("p", { className: "text-xs sm:text-sm text-gray-400 max-w-md mb-8 leading-relaxed", children: "Describe your desired budget ceiling, colours, or clothing styles. Or select any prompt below to test live AI discovery:" }), (0, jsx_runtime_1.jsx)("div", { className: "grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-2xl w-full", children: shared_1.EXAMPLE_PROMPTS.map((prompt, idx) => ((0, jsx_runtime_1.jsxs)("button", { onClick: () => handleSend(prompt), className: "p-3.5 rounded-2xl glass-card text-left text-xs font-medium text-gray-300 hover:text-white border-white/10 hover:border-cyan-400/50 hover:bg-cyan-950/20 transition-all flex items-center justify-between group shadow-sm", children: [(0, jsx_runtime_1.jsxs)("span", { className: "line-clamp-1", children: ["\"", prompt, "\""] }), (0, jsx_runtime_1.jsx)(lucide_react_1.Send, { className: "w-3.5 h-3.5 text-cyan-400 opacity-0 group-hover:opacity-100 transition-all transform group-hover:translate-x-1 flex-shrink-0 ml-2" })] }, idx))) })] })), messages.map(msg => ((0, jsx_runtime_1.jsxs)("div", { className: `flex gap-3 sm:gap-4 ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`, children: [msg.role === 'assistant' && ((0, jsx_runtime_1.jsx)("div", { className: "w-9 h-9 rounded-2xl bg-gradient-to-tr from-cyan-500 via-indigo-600 to-purple-600 flex items-center justify-center text-white flex-shrink-0 mt-1 shadow-lg shadow-indigo-500/20 border border-white/20", children: (0, jsx_runtime_1.jsx)(lucide_react_1.Bot, { className: "w-5 h-5" }) })), (0, jsx_runtime_1.jsxs)("div", { className: "max-w-[88%] sm:max-w-[78%] space-y-3", children: [(0, jsx_runtime_1.jsxs)("div", { className: `p-4 sm:p-5 rounded-2xl text-sm leading-relaxed ${msg.role === 'user'
                                                    ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-tr-none shadow-xl shadow-indigo-600/20 font-medium'
                                                    : 'glass-card text-gray-100 rounded-tl-none border-white/10 bg-surface/90'}`, children: [(0, jsx_runtime_1.jsx)("p", { className: "whitespace-pre-wrap", children: msg.content }), (0, jsx_runtime_1.jsx)("span", { className: `block text-[10px] mt-2 text-right ${msg.role === 'user' ? 'text-indigo-200' : 'text-gray-500'}`, children: msg.timestamp })] }), msg.products && msg.products.length > 0 && ((0, jsx_runtime_1.jsxs)("div", { className: "mt-4", children: [(0, jsx_runtime_1.jsxs)("div", { className: "text-xs font-bold text-cyan-300 mb-3.5 flex items-center gap-2 uppercase tracking-wider", children: [(0, jsx_runtime_1.jsx)(lucide_react_1.Sparkles, { className: "w-4 h-4 text-cyan-400" }), "Verified Candidate Recommendations (", msg.products.length, ")"] }), (0, jsx_runtime_1.jsx)("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4", children: msg.products.map(product => ((0, jsx_runtime_1.jsx)(RecommendationCard_1.RecommendationCard, { product: product }, product.id))) })] }))] }), msg.role === 'user' && ((0, jsx_runtime_1.jsx)("div", { className: "w-9 h-9 rounded-2xl bg-gray-800/90 border border-gray-700 flex items-center justify-center text-gray-300 flex-shrink-0 mt-1 shadow-md", children: (0, jsx_runtime_1.jsx)(lucide_react_1.User, { className: "w-5 h-5" }) }))] }, msg.id))), isLoading && ((0, jsx_runtime_1.jsxs)("div", { className: "flex gap-4 items-start", children: [(0, jsx_runtime_1.jsx)("div", { className: "w-9 h-9 rounded-2xl bg-gradient-to-tr from-cyan-500 to-indigo-600 flex items-center justify-center text-white flex-shrink-0 animate-pulse shadow-lg", children: (0, jsx_runtime_1.jsx)(lucide_react_1.Bot, { className: "w-5 h-5" }) }), (0, jsx_runtime_1.jsxs)("div", { className: "space-y-4 max-w-[85%]", children: [(0, jsx_runtime_1.jsxs)("div", { className: "glass-card p-4 rounded-2xl rounded-tl-none text-xs text-cyan-300 flex items-center gap-2.5 border-cyan-500/30", children: [(0, jsx_runtime_1.jsx)(lucide_react_1.Loader2, { className: "w-4 h-4 animate-spin text-cyan-400" }), (0, jsx_runtime_1.jsx)("span", { children: "Processing natural language intent with Amazon Nova..." })] }), (0, jsx_runtime_1.jsx)("div", { className: "grid grid-cols-1 sm:grid-cols-2 gap-4", children: [1, 2].map(i => ((0, jsx_runtime_1.jsxs)("div", { className: "glass-card h-48 rounded-2xl p-4 animate-pulse flex flex-col justify-between border-white/10", children: [(0, jsx_runtime_1.jsx)("div", { className: "h-4 bg-gray-800/80 rounded-full w-2/3" }), (0, jsx_runtime_1.jsx)("div", { className: "h-3 bg-gray-800/50 rounded-full w-full" }), (0, jsx_runtime_1.jsx)("div", { className: "h-10 bg-gray-800/30 rounded-xl" })] }, i))) })] })] })), error && ((0, jsx_runtime_1.jsxs)("div", { className: "p-4 rounded-2xl bg-rose-950/40 border border-rose-900/60 text-rose-200 text-xs flex items-center justify-between gap-3 shadow-lg", children: [(0, jsx_runtime_1.jsxs)("div", { className: "flex items-center gap-2", children: [(0, jsx_runtime_1.jsx)(lucide_react_1.AlertCircle, { className: "w-4 h-4 text-rose-400 flex-shrink-0" }), (0, jsx_runtime_1.jsx)("span", { children: error })] }), (0, jsx_runtime_1.jsx)("button", { onClick: () => setError(null), className: "hover:underline text-rose-300 font-bold", children: "Dismiss" })] }))] }), (0, jsx_runtime_1.jsxs)("div", { className: "p-4 sm:p-5 bg-gray-950/90 border-t border-gray-800/80 backdrop-blur-xl", children: [(0, jsx_runtime_1.jsxs)("div", { className: "relative flex items-center", children: [(0, jsx_runtime_1.jsx)("textarea", { ref: inputRef, value: inputMessage, onChange: e => setInputMessage(e.target.value), onKeyDown: handleKeyDown, disabled: isLoading, placeholder: "Describe what you want (e.g., 'Show me black T-shirts under LKR 3,000')...", rows: 1, maxLength: 500, className: "w-full pl-5 pr-14 py-4 rounded-2xl bg-gray-900/90 text-sm text-white placeholder-gray-500 border border-gray-800 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 outline-none resize-none disabled:opacity-50 transition-all shadow-inner" }), (0, jsx_runtime_1.jsx)("button", { onClick: () => handleSend(), disabled: !inputMessage.trim() || isLoading, className: "absolute right-3 p-3 rounded-xl bg-gradient-to-r from-cyan-500 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 disabled:from-gray-800 disabled:to-gray-800 text-white disabled:text-gray-500 transition-all shadow-lg shadow-cyan-500/20", title: "Send shopping request", children: isLoading ? ((0, jsx_runtime_1.jsx)(lucide_react_1.Loader2, { className: "w-4 h-4 animate-spin" })) : ((0, jsx_runtime_1.jsx)(lucide_react_1.Send, { className: "w-4 h-4" })) })] }), (0, jsx_runtime_1.jsxs)("div", { className: "flex items-center justify-between mt-2 text-[10px] text-gray-400 px-2", children: [(0, jsx_runtime_1.jsxs)("span", { children: ["Press ", (0, jsx_runtime_1.jsx)("kbd", { className: "px-1.5 py-0.5 rounded bg-gray-800 text-gray-300 font-mono text-[9px]", children: "Enter" }), " to send request \u2022 Maximum 500 characters"] }), (0, jsx_runtime_1.jsxs)("span", { className: "font-mono text-cyan-400/80", children: [inputMessage.length, "/500"] })] })] })] })] }));
};
exports.ChatInterface = ChatInterface;
//# sourceMappingURL=ChatInterface.js.map