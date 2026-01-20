import Search from './Search';
import { fetchPopularCompanyProfiles } from './utilities';

async function Container() {
  const fetchPopularCompanyProfilesResponse =
    await fetchPopularCompanyProfiles();

  return (
    <Search
      fetchPopularCompanyProfilesResponse={fetchPopularCompanyProfilesResponse}
    />
  );
}

export default Container;
