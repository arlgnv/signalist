import type { MarketDataSymbolsGroup } from 'react-ts-tradingview-widgets';

export const SYMBOLS_GROUPS: MarketDataSymbolsGroup[] = [
  {
    name: 'Indices',
    originalName: 'Indices',
    symbols: [
      {
        name: 'SP:SPX',
        displayName: 'S&P 500',
      },
      {
        name: 'CAPITALCOM:US500', // cspell:disable-line
        displayName: 'US 500',
      },
      {
        name: 'INDEX:BTCUSD', // cspell:disable-line
        displayName: 'Bitcoin all time history index',
      },
    ],
  },
  {
    name: 'Stocks',
    originalName: 'Stocks',
    symbols: [
      {
        name: 'NASDAQ:AMD',
        displayName: 'Advanced Micro Devices, Inc.',
      },
      {
        name: 'NASDAQ:AAPL',
        displayName: 'Apple Inc.',
      },
      {
        name: 'NASDAQ:TSLA',
        displayName: 'Tesla, Inc.',
      },
      {
        name: 'NASDAQ:NVDA',
        displayName: 'NVIDIA Corporation',
      },
      {
        name: 'NASDAQ:PLTR', // cspell:disable-line
        displayName: 'Palantir Technologies Inc.',
      },
      {
        name: 'NASDAQ:MSFT',
        displayName: 'Microsoft Corporation',
      },
      {
        name: 'NASDAQ:META',
        displayName: 'Meta Platforms, Inc.',
      },
      {
        name: 'NASDAQ:AMZN',
        displayName: 'Amazon.com, Inc.',
      },
      {
        name: 'NASDAQ:GOOGL',
        displayName: 'Alphabet Inc.',
      },
      {
        name: 'NASDAQ:MSTR', // cspell:disable-line
        displayName: 'Strategy Inc',
      },
      {
        name: 'NASDAQ:MU',
        displayName: 'Micron Technology, Inc.',
      },
      {
        name: 'NASDAQ:SNDK', // cspell:disable-line
        displayName: 'Sandisk Corporation',
      },
      {
        name: 'NASDAQ:INTC',
        displayName: 'Intel Corporation',
      },
    ],
  },
];
