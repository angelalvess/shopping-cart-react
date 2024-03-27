import { BsCartDash } from 'react-icons/bs';
import formatCurrency from '../../utils/formatCurrency';
import propTypes from 'prop-types';
import { useContext } from 'react';
import AppContext from '../../context/AppContext';
import './CartItem.css';

function CartItem({ data }) {
  const { cartItems, setCartItems } = useContext(AppContext);
  const { id, thumbnail, title, price } = data;

  const handleRemoveItem = () => {
    const updateItems = cartItems.filter((item) => item.id !== id);
    setCartItems(updateItems);
  };

  return (
    <section className="cart-item">
      <img src={thumbnail} alt="image product" className="cart-item-image" />

      <div className="cart-item-content">
        <h3 className="cart-item-title">{title}</h3>
        <h3 className="cart-item-price">{formatCurrency(price, 'BRL')}</h3>

        <button
          type="button"
          className="button-remove-item"
          onClick={handleRemoveItem}
        >
          <BsCartDash />
        </button>
      </div>
    </section>
  );
}

export default CartItem;

CartItem.propTypes = {
  data: propTypes.shape({
    thumbnail: propTypes.string.isRequired,
    title: propTypes.string.isRequired,
    price: propTypes.number.isRequired,
    id: propTypes.string.isRequired,
  }).isRequired,
};
