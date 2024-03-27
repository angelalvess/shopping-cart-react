import axios from 'axios';

const fetchProducts = async (query) => {
  const response = await axios.get(
    `https://api.mercadolibre.com/sites/MLB/search?q=${query}`,
  );
  const data = await response.data.results;

  return data;
};

export default fetchProducts;
