import type { TickerTapeProps } from 'react-ts-tradingview-widgets';

const SYMBOLS: NonNullable<TickerTapeProps['symbols']> = [
  {
    proName: 'NASDAQ:AMD',
    title: 'AMD',
  },
  {
    proName: 'NASDAQ:MSFT',
    title: 'MSFT',
  },
  {
    proName: 'CRYPTO:GRAMUSD', // cspell:disable-line
    title: 'GRAMUSD', // cspell:disable-line
  },
  {
    proName: 'BITSTAMP:BTCUSD', // cspell:disable-line
    title: 'BTCUSD', // cspell:disable-line
  },
  {
    proName: 'AMEX:SPY',
    title: 'SPY',
  },
];

export { SYMBOLS };
