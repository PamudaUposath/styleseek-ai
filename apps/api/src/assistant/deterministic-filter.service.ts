import { Injectable, Logger } from '@nestjs/common';
import { Product } from '@styleseek/shared';

export interface DeterministicConstraints {
  maxBudget?: number;
  minBudget?: number;
  colour?: string;
  category?: string;
  size?: string;
}

@Injectable()
export class DeterministicFilterService {
  private readonly logger = new Logger(DeterministicFilterService.name);

  private readonly KNOWN_COLOURS = [
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
  private readonly CATEGORIES_ORDERED: Array<{ keywords: string[]; category: string }> = [
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

  extractConstraints(userMessage: string): DeterministicConstraints {
    const text = userMessage.toLowerCase();
    const constraints: DeterministicConstraints = {};

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
      if (matched) break;
    }

    this.logger.log(`Extracted constraints from "${userMessage}": ${JSON.stringify(constraints)}`);
    return constraints;
  }

  filterCandidates(products: Product[], constraints: DeterministicConstraints): Product[] {
    let candidates = products.filter(p => p.stockStatus !== 'OUT_OF_STOCK' && p.quantity > 0);

    if (constraints.maxBudget !== undefined) {
      const budget = constraints.maxBudget;
      candidates = candidates.filter(p => p.price <= budget);
    }

    if (constraints.colour) {
      const c = constraints.colour.toLowerCase();
      candidates = candidates.filter(p =>
        p.colours.some((col: string) => col.toLowerCase().includes(c)) ||
        p.name.toLowerCase().includes(c) ||
        p.tags.some((t: string) => t.toLowerCase() === c)
      );
    }

    if (constraints.category) {
      candidates = candidates.filter(p => p.category.toLowerCase() === constraints.category?.toLowerCase());
    }

    return candidates;
  }
}
