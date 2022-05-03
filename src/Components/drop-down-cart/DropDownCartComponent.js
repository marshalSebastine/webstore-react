import './dropdown-cart-styles.scss';
import Button from '../customButton/Button.component';

const CartDropDown = () =>  {
    return(
        <div className='cart-dropdown-container'>
            <div className='cart-items'/>
            <Button buttonstyle={'default'} children={'Go to Cart'}></Button>
        </div>
    );
}

export default CartDropDown;