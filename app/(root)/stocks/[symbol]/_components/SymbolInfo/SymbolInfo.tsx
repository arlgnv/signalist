'use client';

import { useTheme } from 'next-themes';
import dynamic from 'next/dynamic';
import { useParams } from 'next/navigation';
import type { ColorTheme } from 'react-ts-tradingview-widgets';

const TradingViewSymbolInfo = dynamic(
  () => import('react-ts-tradingview-widgets').then((w) => w.SymbolInfo),
  {
    ssr: false,
  },
);

function SymbolInfo() {
  const { symbol } = useParams<{ symbol: string }>();
  const { resolvedTheme } = useTheme();

  return (
    <section>
      <h2 className="sr-only">Company info</h2>
      <TradingViewSymbolInfo
        colorTheme={resolvedTheme as ColorTheme}
        symbol={symbol}
        width="100%"
      />
    </section>
  );
}

export default SymbolInfo;
