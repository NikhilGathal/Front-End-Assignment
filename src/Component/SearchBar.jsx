import React from 'react';
import './SearchBar.css'
function SearchBar({ query, setQuery }) {
  return (
    <input
      type="text"
      placeholder="Search Widgets..."
      value={query}
      name='search'
      onChange={e => setQuery(e.target.value)}
    />
  );
}

export default SearchBar;
