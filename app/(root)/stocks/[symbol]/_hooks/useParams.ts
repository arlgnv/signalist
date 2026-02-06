import { useParams as useNextParams } from 'next/navigation';

function useParams() {
  return useNextParams<{ symbol: string }>();
}

export default useParams;
