import { queryOptions } from '@tanstack/react-query';
import axios from 'axios';

import type { SymbolLookup } from '@/types';
import { convertSecondsToMilliseconds } from '@/utilities';

import convertSymbolLookupResultItemToStock from './convertSymbolLookupResultItemToStock';

function createStocksQueryOptions(query: string, modeIsPopular: boolean) {
  return queryOptions({
    queryKey: ['api', 'finnhub', 'search', query],
    queryFn: async () => {
      const response = await axios<SymbolLookup>(
        `/api/finnhub/search?q=${encodeURIComponent(query)}`,
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
}

export default createStocksQueryOptions;
