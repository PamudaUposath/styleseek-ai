"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var DeterministicFilterService_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeterministicFilterService = void 0;
const common_1 = require("@nestjs/common");
let DeterministicFilterService = DeterministicFilterService_1 = class DeterministicFilterService {
    logger = new common_1.Logger(DeterministicFilterService_1.name);
    KNOWN_COLOURS = [
        'black',
        'white',
        'navy',
        'blue',
        'light blue',
        'beige',
        'cream',
        'khaki',
        'grey',
        'charcoal',
        'red',
        'pink',
        'green',
        'olive',
        'emerald',
        'burgundy',
        'yellow',
        'mustard',
        'brown'
    ];
    // Order categories from specific to general with both singular and plural forms
    CATEGORIES_ORDERED = [
        {
            keywords: ['tshirt', 'tshirts', 't-shirt', 't-shirts', 't shirt', 't shirts', 'tee', 'tees'],
            category: 'T-Shirts'
        },
        {
            keywords: ['polo', 'polos', 'shirt', 'shirts', 'oxford', 'button-down'],
            category: 'Shirts'
        },
        {
            keywords: ['hoodie', 'hoodies', 'pullover', 'sweatshirt', 'sweatshirts'],
            category: 'Hoodies'
        },
        {
            keywords: ['jean', 'jeans', 'denim'],
            category: 'Jeans'
        },
        {
            keywords: ['trouser', 'trousers', 'pant', 'pants', 'chino', 'chinos', 'jogger', 'joggers'],
            category: 'Trousers'
        },
        {
            keywords: ['short', 'shorts'],
            category: 'Shorts'
        },
        {
            keywords: ['dress', 'dresses', 'sundress', 'sundresses', 'gown', 'wrap dress'],
            category: 'Dresses'
        },
        {
            keywords: ['jacket', 'jackets', 'windbreaker', 'windbreakers', 'bomber', 'moto'],
            category: 'Jackets'
        },
        {
            keywords: ['accessory', 'accessories', 'bag', 'bags', 'sunglasses', 'cap', 'caps', 'belt', 'belts', 'crossbody'],
            category: 'Accessories'
        }
    ];
    extractConstraints(userMessage) {
        const text = userMessage.toLowerCase();
        const constraints = {};
        // Budget regex patterns
        const maxBudgetPatterns = [
            /(?:under|below|less than|within|max|maximum|up to|budget of|have)\s*(?:lkr|rs\.?|rupees)?\s*([\d,]+)/i,
            /(?:lkr|rs\.?)\s*([\d,]+)\s*(?:or less|max|budget)?/i,
            /(?:under|below|less than)\s*([\d,]+)/i
        ];
        for (const pattern of maxBudgetPatterns) {
            const match = text.match(pattern);
            if (match && match[1]) {
                const val = parseInt(match[1].replace(/,/g, ''), 10);
                if (!isNaN(val) && val > 0) {
                    constraints.maxBudget = val;
                    break;
                }
            }
        }
        // Detect Colour
        for (const colour of this.KNOWN_COLOURS) {
            const regex = new RegExp(`\\b${colour}\\b`, 'i');
            if (regex.test(text)) {
                constraints.colour = colour;
                break;
            }
        }
        // Detect Category
        for (const item of this.CATEGORIES_ORDERED) {
            let matched = false;
            for (const kw of item.keywords) {
                // Handle hyphen or exact keyword matching safely
                const escapedKw = kw.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, '\\$&');
                const regex = new RegExp(`(?:^|\\s|\\b)${escapedKw}(?:$|\\s|\\b)`, 'i');
                if (regex.test(text)) {
                    constraints.category = item.category;
                    matched = true;
                    break;
                }
            }
            if (matched)
                break;
        }
        this.logger.log(`Extracted constraints from "${userMessage}": ${JSON.stringify(constraints)}`);
        return constraints;
    }
    filterCandidates(products, constraints) {
        let candidates = products.filter(p => p.stockStatus !== 'OUT_OF_STOCK' && p.quantity > 0);
        if (constraints.maxBudget !== undefined) {
            const budget = constraints.maxBudget;
            candidates = candidates.filter(p => p.price <= budget);
        }
        if (constraints.colour) {
            const c = constraints.colour.toLowerCase();
            candidates = candidates.filter(p => p.colours.some((col) => col.toLowerCase().includes(c)) ||
                p.name.toLowerCase().includes(c) ||
                p.tags.some((t) => t.toLowerCase() === c));
        }
        if (constraints.category) {
            candidates = candidates.filter(p => p.category.toLowerCase() === constraints.category?.toLowerCase());
        }
        return candidates;
    }
};
exports.DeterministicFilterService = DeterministicFilterService;
exports.DeterministicFilterService = DeterministicFilterService = DeterministicFilterService_1 = __decorate([
    (0, common_1.Injectable)()
], DeterministicFilterService);
//# sourceMappingURL=deterministic-filter.service.js.map