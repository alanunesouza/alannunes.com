import React from 'react';
import algoliasearch from 'algoliasearch/lite';

import { InstantSearch, SearchBox, Stats, Configure, Hits } from 'react-instantsearch-dom';
import BlogItem from '../BlogItem';

const searchClient = algoliasearch(process.env.GATSBY_ALGOLIA_APP_ID, process.env.GATSBY_ALGOLIA_SEARCH_KEY);

export default function Search() {
  return (
    <InstantSearch indexName={process.env.GATSBY_ALGOLIA_INDEX_NAME} searchClient={searchClient}>
      <SearchBox />
      <Hits hitComponent={BlogItem} />
    </InstantSearch>
  );
}
