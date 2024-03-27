import { CiSearch } from 'react-icons/ci';
import { useState, useContext } from 'react';
import fetchProducts from '../../api/fetchProducts';
import AppContext from '../../context/AppContext';

import './SearchBar.css';

function SearchBar() {
  const [search, setSearch] = useState('');
  const { setProducts, setLoading } = useContext(AppContext);

  const handleSearch = async (e) => {
    e.preventDefault();
    setLoading(true);
    const products = await fetchProducts(search);
    setProducts(products);
    setLoading(false);
    setSearch('');
  };

  return (
    <form className="search-bar" onSubmit={handleSearch}>
      {name}
      <input
        className="search-input"
        type="search"
        placeholder="Buscar produtos"
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
