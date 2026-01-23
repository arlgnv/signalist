'use client';

import { useDebouncedState } from '@tanstack/react-pacer/debouncer';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { Loader2, Search as SearchIcon, TrendingUp } from 'lucide-react';
import Link from 'next/link';
import { useState, useEffect } from 'react';

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import Input from '@/components/ui/input';
import { Kbd } from '@/components/ui/kbd';
import {
  Tooltip,
  TooltipTrigger,
  TooltipContent,
} from '@/components/ui/tooltip';
import type { SymbolLookup } from '@/types';
import { convertSecondsToMilliseconds } from '@/utilities';

import type { ContentProps } from './types';
import {
  convertSymbolLookupResultItemToStock,
  convertCompanyProfileToStock,
} from './utilities';

function Content({ fetchPopularCompanyProfilesResponse }: ContentProps) {
  const [dialogIsOpen, setDialogIsOpen] = useState(false);
  const [instantQuery, setInstantQuery] = useState('');
  const [debouncedQuery, setDebouncedQuery] = useDebouncedState(instantQuery, {
    wait: convertSecondsToMilliseconds(1),
  });
  const mode = debouncedQuery ? 'search' : 'popular';
  const modeIsPopular = mode === 'popular';
  const {
    data: fetchedStocks,
    isFetching: symbolLookupIsBeingFetched,
    isError: fetchSymbolLookupFailed,
  } = useQuery({
    queryKey: ['api', 'finnhub', 'search', debouncedQuery],
    queryFn: async () => {
      const response = await axios<SymbolLookup>(
        `/api/finnhub/search?q=${encodeURIComponent(debouncedQuery)}`,
        {
          timeout: convertSecondsToMilliseconds(10),
        },
      );

      return response.data;
    },
    enabled: !modeIsPopular,
    select(symbolLookup) {
      return symbolLookup.result.map(convertSymbolLookupResultItemToStock);
    },
  });
  const stocksAreBeingFetched = modeIsPopular
    ? false
    : symbolLookupIsBeingFetched;
  const stocks = modeIsPopular
    ? fetchPopularCompanyProfilesResponse.status === 'success'
      ? fetchPopularCompanyProfilesResponse.data.map(
          convertCompanyProfileToStock,
        )
      : undefined
    : fetchedStocks;
  const fetchStocksFailed = modeIsPopular
    ? fetchPopularCompanyProfilesResponse.status === 'error'
    : fetchSymbolLookupFailed;

  function clearQueries() {
    setInstantQuery('');
    setDebouncedQuery('');
  }

  function handleDialogOpenChange(open: boolean) {
    setDialogIsOpen(open);

    if (!open) {
      clearQueries();
    }
  }

  function handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
    setInstantQuery(event.target.value);
    setDebouncedQuery(event.target.value);
  }

  function handleStockNavigate() {
    setDialogIsOpen(false);
    clearQueries();
  }

  useEffect(() => {
    if (dialogIsOpen) {
      return;
    }

    function handleDocumentKeyDown(event: KeyboardEvent) {
      if (event.target !== document.body) {
        return;
      }

      if (event.key === '/') {
        event.preventDefault();
        setDialogIsOpen(true);
      }
    }

    document.addEventListener('keydown', handleDocumentKeyDown);

    return () => {
      document.removeEventListener('keydown', handleDocumentKeyDown);
    };
  }, [dialogIsOpen]);

  return (
    <Dialog open={dialogIsOpen} onOpenChange={handleDialogOpenChange}>
      <DialogTrigger className="grid grid-cols-[auto_1fr_auto] items-center gap-x-1 rounded-md bg-input/60 px-2.5 py-1.5 text-left text-muted-foreground hover:bg-input/80">
        <SearchIcon size={16} />
        <span className="text-xs">Search</span>
        <Tooltip>
          <TooltipTrigger asChild>
            <Kbd
              className="pointer-events-auto cursor-help bg-input"
              tabIndex={0}
            >
              /
            </Kbd>
          </TooltipTrigger>
          <TooltipContent>Use to open search dialog</TooltipContent>
        </Tooltip>
      </DialogTrigger>
      <DialogContent className="sm:max-w-200" showCloseButton={false}>
        <DialogTitle className="sr-only">Search stocks</DialogTitle>
        <DialogDescription className="sr-only">
          Search for stocks. Click individual stock to view more details.
        </DialogDescription>
        <Input
          value={instantQuery}
          placeholder="Search stocks..."
          onChange={handleInputChange}
        />
        {stocksAreBeingFetched ? (
          <Loader2 className="mx-auto animate-spin" />
        ) : (
          <>
            {stocks &&
              (stocks.length ? (
                <div>
                  <p className="mb-2 text-xs font-medium text-muted-foreground">{`${modeIsPopular ? 'Popular stocks' : 'Search results'} (${String(stocks.length)})`}</p>
                  <ul className="max-h-70 scroll-py-1 overflow-y-auto">
                    {stocks.map(({ company, ticker, exchange, industry }) => (
                      <li key={`${company}/${ticker}`}>
                        <Link
                          className="grid grid-cols-[auto_1fr] gap-x-1.5 gap-y-1 px-1 py-1.5 text-sm hover:rounded-sm hover:bg-accent hover:text-accent-foreground"
                          href={`/stocks/${ticker}`}
                          onNavigate={handleStockNavigate}
                        >
                          <TrendingUp
                            className="row-span-2 text-muted-foreground"
                            size={16}
                          />
                          <p>{company}</p>
                          <p className="col-start-2 text-muted-foreground">
                            {`${ticker}${exchange ? ` • ${exchange}` : ''}${industry ? ` • ${industry}` : ''}`}
                          </p>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ) : (
                <p className="text-center text-sm text-muted-foreground">
                  {modeIsPopular ? 'No popular stocks' : 'No stocks found'}
                </p>
              ))}
            {fetchStocksFailed && (
              <p className="text-center text-sm text-destructive/90">
                An error occurred while{' '}
                {modeIsPopular
                  ? 'fetching popular stocks'
                  : 'searching for stocks'}
              </p>
            )}
          </>
        )}
      </DialogContent>
    </Dialog>
  );
}

export default Content;
