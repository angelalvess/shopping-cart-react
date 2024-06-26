import propTypes from 'prop-types';
import { FaCartPlus } from 'react-icons/fa';

import './ProductCard.css';
import formatCurrency from '../../utils/formatCurrency';
import { useContext } from 'react';
import AppContext from '../../context/AppContext';

function ProductCard({ data }) {
  const { title, price, thumbnail } = data;

  const { cartItems, setCartItems } = useContext(AppContext);

  const handleAddCart = () => {
    setCartItems([...cartItems, data]);
  };

  return (
    <section className="product-card">
      <img
        src={thumbnail.replace(/\w\.jpg/gi, 'W.jpg')}
        alt="product"
        className="card-image"
      />

      <div className="card-infos">
        <h2 className="card-price">{formatCurrency(price, 'BRL')}</h2>
        <h2 className="card-title">{title}</h2>
      </div>

      <button type="button" className="button-add-cart" onClick={handleAddCart}>
        <FaCartPlus />
      </button>
    </section>
  );
}

export default ProductCard;

ProductCard.propTypes = {
  data: propTypes.shape({
    title: propTypes.string.isRequired,
    price: propTypes.number.isRequired,
    thumbnail: propTypes.string.isRequired,
  }).isRequired,
};
