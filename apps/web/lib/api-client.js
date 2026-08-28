"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.requestRecommendations = requestRecommendations;
exports.fetchProducts = fetchProducts;
const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || 'http://localhost:3001';
async function requestRecommendations(dto) {
    const response = await fetch(`${API_BASE_URL}/api/assistant/recommend`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(dto),
    });
    if (response.status === 429) {
        throw new Error('Rate limit exceeded. Please wait a moment before sending another request.');
    }
    if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(errorData.message || 'Something went wrong while finding recommendations.');
    }
    return response.json();
}
async function fetchProducts() {
    try {
        const response = await fetch(`${API_BASE_URL}/api/products`);
        if (!response.ok)
            throw new Error('Failed to fetch catalogue');
        return response.json();
    }
    catch (err) {
        console.error('Error fetching products:', err);
        return [];
    }
}
//# sourceMappingURL=api-client.js.map