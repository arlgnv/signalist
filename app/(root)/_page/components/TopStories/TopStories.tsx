'use client';

import { useTheme } from 'next-themes';
import { useEffect, useRef } from 'react';

function TopStories() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { resolvedTheme } = useTheme();

  useEffect(() => {
    if (containerRef.current === null || !resolvedTheme) return;

    const script = document.createElement('script');
    script.src =
      'https://s3.tradingview.com/external-embedding/embed-widget-timeline.js';
    script.type = 'text/javascript';
    script.async = true;
    script.innerHTML = `
        {
          "displayMode": "adaptive",
          "feedMode": "market",
          "colorTheme": "${resolvedTheme}",
          "isTransparent": false,
          "locale": "en",
          "market": "stock",
          "width": "100%",
          "height": 632
        }`;

    containerRef.current.appendChild(script);
  }, [resolvedTheme]);

  return (
    <section
      className="tradingview-widget-container"
      key={resolvedTheme}
      ref={containerRef}
    >
      <h2 className="sr-only">Top stories</h2>
      <div className="tradingview-widget-container__widget" />
      <div className="tradingview-widget-copyright">
        <a
          href="https://www.tradingview.com/news/top-providers/tradingview"
          rel="noreferrer"
          target="_blank"
        >
          <span className="blue-text">Top stories</span>
        </a>
        <span className="trademark"> by TradingView</span>
      </div>
    </section>
  );
}

export default TopStories;
