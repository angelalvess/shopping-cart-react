import { useContext } from 'react';
import AppContext from '../../context/AppContext';
import CartItem from '../CartItem/CartItem';
import './Cart.css';
import formatCurrency from '../../utils/formatCurrency';

function Cart() {
  const { cartItems, cartVisible } = useContext(AppContext);

  const totalPrice = cartItems.reduce((acc, cartItem) => {
    return acc + cartItem.price;
  }, 0);

  return (
    <section className={`cart ${cartVisible ? 'cart-show' : ''}`}>
      <div className="cart-items">
        {cartItems.map((cartItem) => (
          <CartItem key={cartItem.id} data={cartItem} />
        ))}
      </div>

      <div className="cart-resume">{formatCurrency(totalPrice, 'BRL')}</div>
    </section>
  );
}

export default Cart;
