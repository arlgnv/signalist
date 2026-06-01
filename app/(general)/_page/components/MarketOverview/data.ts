import type { MarketOverviewTab } from 'react-ts-tradingview-widgets';

export const TABS: MarketOverviewTab[] = [
  {
    title: 'Finance',
    originalTitle: 'Finance',
    symbols: [
      {
        s: 'NSE:HDFCBANK', // cspell:disable-line
        d: 'HDFC Bank Limited', // cspell:disable-line
      },
      {
        s: 'NSE:SBIN',
        d: 'State Bank of India',
      },
      {
        s: 'NSE:BSE',
        d: 'BSE Ltd.',
      },
      {
        s: 'NASDAQ:COIN',
        d: 'Coinbase Global, Inc. - 3',
      },
      {
        s: 'NASDAQ:SOFI',
        d: 'SoFi Technologies, Inc.',
      },
    ],
  },
  {
    title: 'Technology Services',
    originalTitle: 'Technology Services',
    symbols: [
      {
        s: 'NASDAQ:MSFT',
        d: 'Microsoft Corporation',
      },
      {
        s: 'NASDAQ:META',
        d: 'Meta Platforms, Inc.',
      },
      {
        s: 'NASDAQ:PLTR', // cspell:disable-line
        d: 'Palantir Technologies Inc.',
      },
      {
        s: 'NASDAQ:NFLX',
        d: 'Netflix, Inc.',
      },
      {
        s: 'NASDAQ:MSTR', // cspell:disable-line
        d: 'Strategy Inc',
      },
    ],
  },
  {
    title: 'Communications',
    originalTitle: 'Communications',
    symbols: [
      {
        s: 'NASDAQ:ASTS',
        d: 'AST SpaceMobile, Inc.',
      },
      {
        s: 'NSE:BHARTIARTL', // cspell:disable-line
        d: 'Bharti Airtel Limited', // cspell:disable-line
      },
      {
        s: 'NSE:IDEA',
        d: 'Vodafone Idea Ltd',
      },
      {
        s: 'NYSE:VZ',
        d: 'Verizon Communications Inc.',
      },
      {
        s: 'TSE:9984',
        d: 'SoftBank Group Corp.',
      },
    ],
  },
];
