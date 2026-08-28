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
    const messagesEndRef = (0, react_1.useRef)(null);
    const inputRef = (0, react_1.useRef)(null);
    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    };
    (0, react_1.useEffect)(() => {
        scrollToBottom();
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
    return ((0, jsx_runtime_1.jsxs)("section", { id: "assistant", className: "py-12 px-4 max-w-6xl mx-auto", children: [(0, jsx_runtime_1.jsxs)("div", { className: "text-center mb-8", children: [(0, jsx_runtime_1.jsxs)("div", { className: "inline-flex items-center gap-2 px-3 py-1 rounded-full glass-card text-xs font-semibold text-indigo-400 border border-indigo-500/20 mb-3", children: [(0, jsx_runtime_1.jsx)(lucide_react_1.Sparkles, { className: "w-3.5 h-3.5" }), "Interactive AI Discovery"] }), (0, jsx_runtime_1.jsx)("h2", { className: "text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-2", children: "Ask StyleSeek AI Assistant" }), (0, jsx_runtime_1.jsx)("p", { className: "text-sm sm:text-base text-gray-400 max-w-xl mx-auto", children: "Type your preferences or click an example prompt below. Nova AI will analyze your intent and return verified available catalogue items." })] }), (0, jsx_runtime_1.jsxs)("div", { className: "glass-panel rounded-3xl border border-gray-800 shadow-2xl overflow-hidden flex flex-col min-h-[600px] max-h-[850px]", children: [(0, jsx_runtime_1.jsxs)("div", { className: "px-6 py-4 bg-surface/80 border-b border-gray-800 flex items-center justify-between", children: [(0, jsx_runtime_1.jsxs)("div", { className: "flex items-center gap-3", children: [(0, jsx_runtime_1.jsx)("div", { className: "w-3 h-3 rounded-full bg-emerald-500 animate-pulse" }), (0, jsx_runtime_1.jsx)("span", { className: "text-sm font-semibold text-gray-200", children: "StyleSeek Assistant Session" }), (0, jsx_runtime_1.jsx)("span", { className: "text-xs text-gray-500 hidden sm:inline", children: "(No Login Required)" })] }), messages.length > 0 && ((0, jsx_runtime_1.jsxs)("button", { onClick: handleClear, className: "px-3 py-1.5 rounded-lg text-xs font-medium text-gray-400 hover:text-red-400 hover:bg-red-950/30 transition-all flex items-center gap-1.5 border border-transparent hover:border-red-900/50", title: "Clear chat transcript", children: [(0, jsx_runtime_1.jsx)(lucide_react_1.Trash2, { className: "w-3.5 h-3.5" }), "Clear Conversation"] }))] }), (0, jsx_runtime_1.jsxs)("div", { className: "flex-1 overflow-y-auto p-4 sm:p-6 space-y-6", children: [messages.length === 0 && ((0, jsx_runtime_1.jsxs)("div", { className: "h-full flex flex-col items-center justify-center text-center py-10 px-4", children: [(0, jsx_runtime_1.jsx)("div", { className: "w-16 h-16 rounded-2xl bg-indigo-600/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 mb-4 shadow-inner", children: (0, jsx_runtime_1.jsx)(lucide_react_1.Sparkles, { className: "w-8 h-8 animate-bounce" }) }), (0, jsx_runtime_1.jsx)("h3", { className: "text-lg font-bold text-white mb-2", children: "What are you looking for today?" }), (0, jsx_runtime_1.jsx)("p", { className: "text-xs sm:text-sm text-gray-400 max-w-md mb-8", children: "Try asking for specific budgets, occasions, colours, or style matching. Select a suggested prompt below to get started instantly:" }), (0, jsx_runtime_1.jsx)("div", { className: "grid grid-cols-1 sm:grid-cols-2 gap-2.5 max-w-2xl w-full", children: shared_1.EXAMPLE_PROMPTS.map((prompt, idx) => ((0, jsx_runtime_1.jsxs)("button", { onClick: () => handleSend(prompt), className: "p-3 rounded-xl glass-card text-left text-xs font-medium text-gray-300 hover:text-white hover:border-indigo-500/40 transition-all flex items-center justify-between group", children: [(0, jsx_runtime_1.jsxs)("span", { className: "line-clamp-1", children: ["\"", prompt, "\""] }), (0, jsx_runtime_1.jsx)(lucide_react_1.Send, { className: "w-3.5 h-3.5 text-indigo-400 opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0 ml-2" })] }, idx))) })] })), messages.map(msg => ((0, jsx_runtime_1.jsxs)("div", { className: `flex gap-3 sm:gap-4 ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`, children: [msg.role === 'assistant' && ((0, jsx_runtime_1.jsx)("div", { className: "w-8 h-8 rounded-xl bg-gradient-to-tr from-indigo-600 to-purple-600 flex items-center justify-center text-white flex-shrink-0 mt-1 shadow-md", children: (0, jsx_runtime_1.jsx)(lucide_react_1.Bot, { className: "w-4 h-4" }) })), (0, jsx_runtime_1.jsxs)("div", { className: `max-w-[85%] sm:max-w-[75%] space-y-3`, children: [(0, jsx_runtime_1.jsxs)("div", { className: `p-4 rounded-2xl text-sm leading-relaxed ${msg.role === 'user'
                                                    ? 'bg-indigo-600 text-white rounded-tr-none shadow-lg shadow-indigo-600/10'
                                                    : 'glass-card text-gray-200 rounded-tl-none border-gray-800'}`, children: [(0, jsx_runtime_1.jsx)("p", { className: "whitespace-pre-wrap", children: msg.content }), (0, jsx_runtime_1.jsx)("span", { className: `block text-[10px] mt-2 text-right ${msg.role === 'user' ? 'text-indigo-200' : 'text-gray-500'}`, children: msg.timestamp })] }), msg.products && msg.products.length > 0 && ((0, jsx_runtime_1.jsxs)("div", { className: "mt-4", children: [(0, jsx_runtime_1.jsxs)("div", { className: "text-xs font-semibold text-indigo-300 mb-3 flex items-center gap-1.5", children: [(0, jsx_runtime_1.jsx)(lucide_react_1.Sparkles, { className: "w-3.5 h-3.5 text-indigo-400" }), "Recommended Items (", msg.products.length, ")"] }), (0, jsx_runtime_1.jsx)("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4", children: msg.products.map(product => ((0, jsx_runtime_1.jsx)(RecommendationCard_1.RecommendationCard, { product: product }, product.id))) })] }))] }), msg.role === 'user' && ((0, jsx_runtime_1.jsx)("div", { className: "w-8 h-8 rounded-xl bg-gray-800 border border-gray-700 flex items-center justify-center text-gray-300 flex-shrink-0 mt-1", children: (0, jsx_runtime_1.jsx)(lucide_react_1.User, { className: "w-4 h-4" }) }))] }, msg.id))), isLoading && ((0, jsx_runtime_1.jsxs)("div", { className: "flex gap-4 items-start", children: [(0, jsx_runtime_1.jsx)("div", { className: "w-8 h-8 rounded-xl bg-gradient-to-tr from-indigo-600 to-purple-600 flex items-center justify-center text-white flex-shrink-0 animate-pulse", children: (0, jsx_runtime_1.jsx)(lucide_react_1.Bot, { className: "w-4 h-4" }) }), (0, jsx_runtime_1.jsxs)("div", { className: "space-y-4 max-w-[80%]", children: [(0, jsx_runtime_1.jsxs)("div", { className: "glass-card p-4 rounded-2xl rounded-tl-none text-xs text-indigo-300 flex items-center gap-2", children: [(0, jsx_runtime_1.jsx)(lucide_react_1.Loader2, { className: "w-4 h-4 animate-spin text-indigo-400" }), (0, jsx_runtime_1.jsx)("span", { children: "Finding the best matches with Amazon Nova..." })] }), (0, jsx_runtime_1.jsx)("div", { className: "grid grid-cols-1 sm:grid-cols-2 gap-4", children: [1, 2].map(i => ((0, jsx_runtime_1.jsxs)("div", { className: "glass-card h-44 rounded-2xl p-4 animate-pulse flex flex-col justify-between border-gray-800", children: [(0, jsx_runtime_1.jsx)("div", { className: "h-4 bg-gray-800 rounded w-2/3" }), (0, jsx_runtime_1.jsx)("div", { className: "h-3 bg-gray-800/60 rounded w-full" }), (0, jsx_runtime_1.jsx)("div", { className: "h-8 bg-gray-800/40 rounded" })] }, i))) })] })] })), error && ((0, jsx_runtime_1.jsxs)("div", { className: "p-4 rounded-2xl bg-red-950/40 border border-red-900/50 text-red-200 text-xs flex items-center justify-between gap-3", children: [(0, jsx_runtime_1.jsxs)("div", { className: "flex items-center gap-2", children: [(0, jsx_runtime_1.jsx)(lucide_react_1.AlertCircle, { className: "w-4 h-4 text-red-400 flex-shrink-0" }), (0, jsx_runtime_1.jsx)("span", { children: error })] }), (0, jsx_runtime_1.jsx)("button", { onClick: () => setError(null), className: "hover:underline text-red-300 font-semibold", children: "Dismiss" })] })), (0, jsx_runtime_1.jsx)("div", { ref: messagesEndRef })] }), (0, jsx_runtime_1.jsxs)("div", { className: "p-4 bg-surface/90 border-t border-gray-800", children: [(0, jsx_runtime_1.jsxs)("div", { className: "relative flex items-center", children: [(0, jsx_runtime_1.jsx)("textarea", { ref: inputRef, value: inputMessage, onChange: e => setInputMessage(e.target.value), onKeyDown: handleKeyDown, disabled: isLoading, placeholder: "Describe what you want (e.g., 'Show me black T-shirts under LKR 3,000')...", rows: 1, maxLength: 500, className: "w-full pl-4 pr-12 py-3.5 rounded-2xl bg-gray-900/90 text-sm text-white placeholder-gray-500 border border-gray-800 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 outline-none resize-none disabled:opacity-50 transition-all" }), (0, jsx_runtime_1.jsx)("button", { onClick: () => handleSend(), disabled: !inputMessage.trim() || isLoading, className: "absolute right-2.5 p-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 disabled:bg-gray-800 text-white disabled:text-gray-500 transition-all shadow-md shadow-indigo-600/20", title: "Send request", children: isLoading ? ((0, jsx_runtime_1.jsx)(lucide_react_1.Loader2, { className: "w-4 h-4 animate-spin" })) : ((0, jsx_runtime_1.jsx)(lucide_react_1.Send, { className: "w-4 h-4" })) })] }), (0, jsx_runtime_1.jsxs)("div", { className: "flex items-center justify-between mt-2 text-[10px] text-gray-500 px-2", children: [(0, jsx_runtime_1.jsx)("span", { children: "Press Enter to send request \u2022 Maximum 500 characters" }), (0, jsx_runtime_1.jsxs)("span", { children: [inputMessage.length, "/500"] })] })] })] })] }));
};
exports.ChatInterface = ChatInterface;
//# sourceMappingURL=ChatInterface.js.map