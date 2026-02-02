'use client';

import { useTradingViewWidget } from '@/app/_shared/hooks';

interface Props {
  className?: string;
  title?: string;
  scriptUrl: string;
  config: Record<string, unknown>;
  height?: number;
}

function TradingViewWidget({
  className,
  title,
  scriptUrl,
  config,
  height = 600,
}: Props) {
  const containerRef = useTradingViewWidget(scriptUrl, config, height);

  return (
    <section className={className}>
      {title && (
        <h3 className="mb-5 text-2xl font-semibold text-gray-100">{title}</h3>
      )}
      <div className="tradingview-widget-container" ref={containerRef}>
        <div
          className="tradingview-widget-container__widget"
          style={{ height, width: '100%' }}
        />
      </div>
    </section>
  );
}

export default TradingViewWidget;
