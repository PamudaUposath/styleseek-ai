import { Product } from '@styleseek/shared';
export interface DeterministicConstraints {
    maxBudget?: number;
    minBudget?: number;
    colour?: string;
    category?: string;
    size?: string;
}
export declare class DeterministicFilterService {
    private readonly logger;
    private readonly KNOWN_COLOURS;
    private readonly CATEGORIES_ORDERED;
    extractConstraints(userMessage: string): DeterministicConstraints;
    filterCandidates(products: Product[], constraints: DeterministicConstraints): Product[];
}
