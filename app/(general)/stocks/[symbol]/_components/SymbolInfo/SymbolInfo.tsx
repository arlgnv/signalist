'use client';

import dynamic from 'next/dynamic';

import { useTheme } from '@/theme';

import { useParams } from '../../_hooks';

const TradingViewSymbolInfo = dynamic(
  () => import('react-ts-tradingview-widgets').then((w) => w.SymbolInfo),
  {
    ssr: false,
  },
);

function SymbolInfo() {
  const { symbol } = useParams();
  const { resolvedTheme } = useTheme();

  return (
    <section>
      <h2 className="sr-only">Company info</h2>
      <TradingViewSymbolInfo
        colorTheme={resolvedTheme}
        symbol={symbol}
        width="100%"
      />
    </section>
  );
}

export default SymbolInfo;
