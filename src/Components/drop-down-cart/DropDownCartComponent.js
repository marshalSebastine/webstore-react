import {CartDropDownContainer,CartItems} from './dropdown-cart-styles.js';
import CartItem from '../cart-item.component/cartitem';
import Button from '../customButton/Button.component';
import { useContext} from 'react';
import { Fragment } from 'react';
import { useNavigate } from 'react-router-dom';
import { CartContext } from '../../contexts/CartContext';




const CartDropDown = () =>  {
    const {cartproducts} = useContext(CartContext);
    const navigate = useNavigate();
    const navigateToCart = () => 
         navigate('/checkout')
 
    return(
        <CartDropDownContainer>
            {
                cartproducts.length ? (<Fragment>
                    <CartItems>
                        {cartproducts.map((product) => {
                            return (<CartItem key={product.id} cartitem={product}></CartItem>)
                        })}
                    </CartItems>
                    <Button onClick={navigateToCart} buttonstyle={'default'} children={'Go to Cart'}></Button>
                </Fragment>) : (<span style={{ fontSize: '18px', margin: '50px auto' }}>Empty Cart</span>)
            }

           
        </CartDropDownContainer>
    );
}

export default CartDropDown;