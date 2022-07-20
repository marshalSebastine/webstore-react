/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/react-in-jsx-scope */
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { selectCartItems } from '../../store/cart/cart-selector.js';
import { CartDropDownContainer, CartItems } from './dropdown-cart-styles.js';
import CartItem from '../cart-item.component/cartitem';
import Button from '../customButton/Button.component';





function CartDropDown() {

  const cartproducts = useSelector(selectCartItems);
  const navigate = useNavigate();
  const navigateToCart = () => navigate('/checkout');

  return (
    <CartDropDownContainer>
      {
                cartproducts.length ? (
                  <>
                    <CartItems>
                      {cartproducts.map((product) => (<CartItem key={product.id} cartitem={product} />))}
                    </CartItems>
                    <Button onClick={navigateToCart} buttonstyle="default" children="Go to Cart" />
                  </>
                ) : (<span style={{ fontSize: '18px', margin: '50px auto' }}>Empty Cart</span>)
            }


    </CartDropDownContainer>
  );
}

export default CartDropDown;
