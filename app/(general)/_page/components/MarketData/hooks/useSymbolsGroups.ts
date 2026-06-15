import { useTranslations } from 'next-intl';
import type { MarketDataSymbolsGroup } from 'react-ts-tradingview-widgets';

function useSymbolsGroups(): MarketDataSymbolsGroup[] {
  const t = useTranslations('pages.home.marketData');

  return [
    {
      name: t('stocksGroupTitle'),
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
      originalName: 'Stocks',
    },
    {
      name: t('indicesGroupTitle'),
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
      originalName: 'Indices',
    },
  ];
}

export default useSymbolsGroups;
