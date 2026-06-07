import { useTranslations } from 'next-intl';
import type { MarketOverviewTab } from 'react-ts-tradingview-widgets';

function useTabs(): MarketOverviewTab[] {
  const t = useTranslations('pages.home.marketOverview');

  return [
    {
      title: t('stocksTabTitle'),
      symbols: [
        {
          s: 'NASDAQ:AMD',
          d: 'Advanced Micro Devices, Inc.',
        },
        {
          s: 'NASDAQ:NVDA',
          d: 'NVIDIA Corporation',
        },
        {
          s: 'NASDAQ:MSFT',
          d: 'Microsoft Corporation',
        },
        {
          s: 'NASDAQ:META',
          d: 'Meta Platforms Inc Class A',
        },
        {
          s: 'NASDAQ:TSLA',
          d: 'Tesla, Inc.',
        },
      ],
      originalTitle: 'Stocks',
    },
    {
      title: t('cryptoTabTitle'),
      symbols: [
        {
          s: 'BITSTAMP:BTCUSD', // cspell:disable-line
          d: 'Bitcoin / U.S. dollar',
        },
        {
          s: 'BITSTAMP:ETHUSD', // cspell:disable-line
          d: 'Ethereum / U.S. dollar',
        },
        {
          s: 'BITSTAMP:TONUSD', // cspell:disable-line
          d: 'Toncoin / U.S. dollar',
        },
        {
          s: 'BITSTAMP:BNBUSD', // cspell:disable-line
          d: 'BNB / U.S. dollar',
        },
        {
          s: 'BITSTAMP:USDTUSD', // cspell:disable-line
          d: 'Tether / U.S. dollar',
        },
      ],
      originalTitle: 'Crypto',
    },
    {
      title: t('indicesTabTitle'),
      symbols: [
        {
          s: 'SP:SPX',
          d: 'S&P 500',
        },
        {
          s: 'NSE:NIFTY',
          d: 'Nifty 50 Index',
        },
        {
          s: 'CAPITALCOM:NAS100', // cspell:disable-line
          d: 'US Tech 100',
        },
        {
          s: 'CBOE:VIX',
          d: 'CBOE Volatility Index',
        },
        {
          s: 'FOREXCOM:GER40', // cspell:disable-line
          d: 'Germany 40 CFD',
        },
      ],
      originalTitle: 'Indices',
    },
  ];
}

export default useTabs;
