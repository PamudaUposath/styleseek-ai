"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.metadata = void 0;
exports.default = RootLayout;
const jsx_runtime_1 = require("react/jsx-runtime");
require("./globals.css");
exports.metadata = {
    title: 'StyleSeek AI — Conversational Fashion Discovery',
    description: 'AI-powered fashion discovery assistant built with Amazon Bedrock and Amazon Nova to help users find suitable clothing products using natural language.',
    keywords: ['StyleSeek AI', 'Amazon Bedrock', 'Amazon Nova', 'Fashion Discovery', 'Next.js 16', 'AWS Lambda'],
};
function RootLayout({ children, }) {
    return ((0, jsx_runtime_1.jsx)("html", { lang: "en", className: "dark scroll-smooth", children: (0, jsx_runtime_1.jsx)("body", { className: "min-h-screen bg-background text-gray-100 font-sans antialiased selection:bg-indigo-500 selection:text-white", children: children }) }));
}
//# sourceMappingURL=layout.js.map