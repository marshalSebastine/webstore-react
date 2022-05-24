import { CartIconContainer, SpanItemCount, ShoppingIcon }from'./cart-icon-styles.js';
import { CartContext } from '../../contexts/CartContext';

import { useContext } from 'react';

const ShopIcon = () => {

    const {cartdroppeddown,setcartdrop,cartcount} = useContext(CartContext);

    const toggleDropDown = () => {
        if (cartdroppeddown){
            setcartdrop(false);
        }else{
            setcartdrop(true);
        }
    }

    return(
        <CartIconContainer onClick={toggleDropDown}>
            <ShoppingIcon/>
            <SpanItemCount>{cartcount}</SpanItemCount>
        </CartIconContainer>

    );
}


export default ShopIcon;