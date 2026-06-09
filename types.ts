import type * as z from 'zod';

import type auth from './auth';
import type { MarketNewsSchema } from './schemas';

export type User = typeof auth.$Infer.Session.user;

export interface CompanyProfile {
  country: string;
  currency: string;
  exchange: string;
  ipo: string;
  marketCapitalization: number;
  name: string;
  phone: string;
  shareOutstanding: number;
  ticker: string;
  weburl: string;
  logo: string;
  finnhubIndustry: string;
}

export type MarketNews = z.infer<typeof MarketNewsSchema>;

export interface SymbolLookup {
  count: number;
  result: {
    description: string;
    displaySymbol: string;
    symbol: string;
    type: string;
  }[];
}

export type InvestmentGoal = 'growth' | 'income' | 'balanced' | 'conservative';

export type RiskTolerance = 'low' | 'medium' | 'high';

export type PreferredIndustry =
  | 'technology'
  | 'healthcare'
  | 'finance'
  | 'energy'
  | 'consumerGoods';
