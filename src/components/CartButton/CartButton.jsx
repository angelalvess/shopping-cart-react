import { CiShoppingCart } from 'react-icons/ci';
import { useContext } from 'react';
import AppContext from '../../context/AppContext';
import './CartButton.css';

function CartButton() {
  const { cartItems, cartVisible, setCartVisible } = useContext(AppContext);

  return (
    <button
      type="button"
      className="cart-button"
      onClick={() => setCartVisible(!cartVisible)}
    >
      <CiShoppingCart />
      {cartItems.length > 0 && (
        <span className="cart-status">{cartItems.length}</span>
      )}
    </button>
  );
}

export default CartButton;
