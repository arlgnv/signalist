import type fetchPopularCompanyProfiles from './utilities/fetchPopularCompanyProfiles';

export interface SearchProps {
  fetchPopularCompanyProfilesResponse: Awaited<
    ReturnType<typeof fetchPopularCompanyProfiles>
  >;
}

export interface Stock {
  company: string;
  ticker: string;
  exchange?: string;
  industry?: string;
}
