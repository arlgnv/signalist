import type fetchPopularCompanyProfiles from './utilities/fetchPopularCompanyProfiles';

export interface ContentProps {
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
