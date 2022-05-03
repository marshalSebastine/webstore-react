import {ReactComponent as ShoppingCartIcon} from '../../assets/shopping-bag.svg';
import './cart-icon-styles.scss';
import { CartContext } from '../../contexts/CartContext';
import { useContext } from 'react';

const ShopIcon = () => {

    const {cartdroppeddown,setcartdrop} = useContext(CartContext);

    const toggleDropDown = () => {
        if (cartdroppeddown){
            setcartdrop(false);
        }else{
            setcartdrop(true);
        }
    }

    return(
        <div className='cart-icon-container' onClick={toggleDropDown}>
            <ShoppingCartIcon className='shopping-icon'/>
            <span className='item-count'>0</span>
        </div>

    );
}


export default ShopIcon;