'use client';

import { useEffect, useRef } from 'react';

import { useResolvedTheme } from '@/hooks';

function TopStories() {
  const containerRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const resolvedTheme = useResolvedTheme();

  useEffect(() => {
    if (
      containerRef.current === null ||
      headingRef.current === null ||
      !resolvedTheme
    )
      return;

    const widget = document.createElement('div');
    widget.className = 'tradingview-widget-container__widget';
    headingRef.current.after(widget);

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

    containerRef.current.append(script);

    return () => {
      widget.remove();
      script.remove();
      containerRef.current
        ?.querySelectorAll('iframe, style')
        .forEach((element) => {
          element.remove();
        });
    };
  }, [resolvedTheme]);

  return (
    <section className="tradingview-widget-container" ref={containerRef}>
      <h2 className="sr-only" ref={headingRef}>
        Top stories
      </h2>
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
