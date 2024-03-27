import { CiSearch } from 'react-icons/ci';
import { useState } from 'react';

import './SearchBar.css';

function SearchBar() {
  const [search, setSearch] = useState('');

  return (
    <form className="search-bar">
      <input
        className="search-input"
        type="search"
        placeholder="Search product"
        required
        value={search}
        onChange={({ target }) => setSearch(target.value)}
      />

      <button className="search-button" type="submit">
        <CiSearch />
      </button>
    </form>
  );
}

export default SearchBar;
