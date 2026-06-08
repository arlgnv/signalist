'use client';

import { useLocale, useTranslations } from 'next-intl';
import { useEffect, useRef } from 'react';

import { useTheme } from '@/theme';

function TopStories() {
  const containerRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const { resolvedTheme } = useTheme();
  const t = useTranslations('pages.home.topStories');
  const locale = useLocale();
  console.log(locale);
  useEffect(() => {
    const containerElement = containerRef.current;

    if (containerElement === null || headingRef.current === null) return;

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
        "locale": "${locale}",
        "market": "stock",
        "width": "100%",
        "height": 632
      }`;

    containerElement.append(script);

    return () => {
      widget.remove();
      script.remove();
      containerElement.querySelectorAll('iframe, style').forEach((element) => {
        element.remove();
      });
    };
  }, [resolvedTheme, locale]);

  return (
    <section className="tradingview-widget-container" ref={containerRef}>
      <h2 className="sr-only" ref={headingRef}>
        {t('title')}
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
