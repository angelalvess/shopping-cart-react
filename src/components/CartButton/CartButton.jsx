import { CiShoppingCart } from 'react-icons/ci';
import './CartButton.css';

function CartButton() {
  return (
    <button type="button" className="cart-button">
      <CiShoppingCart />
      <span className="cart-status">1</span>
    </button>
  );
}

export default CartButton;
