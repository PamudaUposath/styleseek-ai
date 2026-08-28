import { DeterministicFilterService } from '../src/assistant/deterministic-filter.service';
import { Product } from '@styleseek/shared';

describe('DeterministicFilterService', () => {
  let filterService: DeterministicFilterService;

  const sampleProducts: Product[] = [
    {
      id: 'STY-001',
      name: 'Black Oversized Tee',
      slug: 'black-tee',
      description: 'Casual tee',
      category: 'T-Shirts',
      audience: 'Unisex',
      price: 2890,
      currency: 'LKR',
      colours: ['Black'],
      sizes: ['M', 'L'],
      stockStatus: 'IN_STOCK',
      quantity: 10,
      tags: ['black', 'tshirt'],
      imageUrl: '/tshirt.jpg'
    },
    {
      id: 'STY-003',
      name: 'Navy Polo Shirt',
      slug: 'navy-polo',
      description: 'Polo shirt',
      category: 'Shirts',
      audience: 'Men',
      price: 3490,
      currency: 'LKR',
      colours: ['Navy'],
      sizes: ['L'],
      stockStatus: 'IN_STOCK',
      quantity: 5,
      tags: ['navy', 'polo'],
      imageUrl: '/polo.jpg'
    },
    {
      id: 'STY-027',
      name: 'Red Varsity Jacket',
      slug: 'red-jacket',
      description: 'Out of stock jacket',
      category: 'Jackets',
      audience: 'Unisex',
      price: 11500,
      currency: 'LKR',
      colours: ['Red'],
      sizes: ['M'],
      stockStatus: 'OUT_OF_STOCK',
      quantity: 0,
      tags: ['red', 'jacket'],
      imageUrl: '/jacket.jpg'
    }
  ];

  beforeEach(() => {
    filterService = new DeterministicFilterService();
  });

  it('should extract budget constraints correctly', () => {
    expect(filterService.extractConstraints('Show me black T-shirts under LKR 3000').maxBudget).toBe(3000);
    expect(filterService.extractConstraints('below 4,000 rs').maxBudget).toBe(4000);
    expect(filterService.extractConstraints('I have LKR 6,000 what can I buy').maxBudget).toBe(6000);
  });

  it('should extract colour and category constraints', () => {
    const c1 = filterService.extractConstraints('Find me black t-shirts');
    expect(c1.colour).toBe('black');
    expect(c1.category).toBe('T-Shirts');

    const c2 = filterService.extractConstraints('Navy polo shirt under 5000');
    expect(c2.colour).toBe('navy');
    expect(c2.maxBudget).toBe(5000);
  });

  it('should filter candidate products and enforce max budget', () => {
    const constraints = { maxBudget: 3000, colour: 'black' };
    const filtered = filterService.filterCandidates(sampleProducts, constraints);

    expect(filtered.length).toBe(1);
    expect(filtered[0].id).toBe('STY-001');
  });

  it('should exclude out-of-stock items', () => {
    const filtered = filterService.filterCandidates(sampleProducts, {});
    expect(filtered.some(p => p.id === 'STY-027')).toBe(false);
  });
});
