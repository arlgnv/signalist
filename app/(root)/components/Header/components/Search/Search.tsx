import Content from './Content';
import { fetchPopularCompanyProfiles } from './utilities';

async function Search() {
  const fetchPopularCompanyProfilesResponse =
    await fetchPopularCompanyProfiles();

  return (
    <Content
      fetchPopularCompanyProfilesResponse={fetchPopularCompanyProfilesResponse}
    />
  );
}

export default Search;
