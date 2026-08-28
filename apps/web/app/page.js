"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = HomePage;
const jsx_runtime_1 = require("react/jsx-runtime");
const Navbar_1 = require("../components/Navbar");
const Hero_1 = require("../components/Hero");
const ChatInterface_1 = require("../components/ChatInterface");
const FeaturedProducts_1 = require("../components/FeaturedProducts");
const HowItWorks_1 = require("../components/HowItWorks");
const Footer_1 = require("../components/Footer");
function HomePage() {
    return ((0, jsx_runtime_1.jsxs)("div", { className: "min-h-screen flex flex-col", children: [(0, jsx_runtime_1.jsx)(Navbar_1.Navbar, {}), (0, jsx_runtime_1.jsxs)("main", { className: "flex-1", children: [(0, jsx_runtime_1.jsx)(Hero_1.Hero, {}), (0, jsx_runtime_1.jsx)(ChatInterface_1.ChatInterface, {}), (0, jsx_runtime_1.jsx)(FeaturedProducts_1.FeaturedProducts, {}), (0, jsx_runtime_1.jsx)(HowItWorks_1.HowItWorks, {})] }), (0, jsx_runtime_1.jsx)(Footer_1.Footer, {})] }));
}
//# sourceMappingURL=page.js.map