import React from 'react';
import algoliasearch from 'algoliasearch/lite';
import ReactGA from 'react-ga';
import qs from 'qs';
import PropTypes from 'prop-types';

import { InstantSearch, SearchBox, Hits, Stats } from 'react-instantsearch-dom';
import BlogItem from '../BlogItem';
import * as styles from './styles';

const searchClient = algoliasearch(process.env.GATSBY_ALGOLIA_APP_ID, process.env.GATSBY_ALGOLIA_SEARCH_KEY);
const urlToSearchState = ({ search }) => qs.parse(search.slice(1));

const trackSearch = (term) => {
  ReactGA.event({
    category: 'Search',
    action: 'search',
    label: `Search - ${term}`,
  });
};

export default function Search(props) {
  const { location } = props;

  const [searchState, setSearchState] = React.useState(urlToSearchState(location));

  const onSearchStateChange = (updatedSearchState) => {
    trackSearch(updatedSearchState.query);
    setSearchState(updatedSearchState);
  };

  return (
    <styles.Search>
      <InstantSearch
        onSearchStateChange={onSearchStateChange}
        indexName={process.env.GATSBY_ALGOLIA_INDEX_NAME}
        searchClient={searchClient}
      >
        <SearchBox translations={{ placeholder: 'Digite o que procura no blog' }} />

        {searchState && searchState.query && (
          <Stats
            translations={{
              stats(nbHits) {
                return `${nbHits} resultados encontrados`;
              },
            }}
          />
        )}
        <Hits hitComponent={BlogItem} />
      </InstantSearch>
    </styles.Search>
  );
}

Search.propTypes = {
  location: PropTypes.string.isRequired,
};
