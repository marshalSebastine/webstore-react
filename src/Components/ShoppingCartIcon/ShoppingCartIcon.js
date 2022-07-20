import { useSelector, useDispatch } from 'react-redux';
import { CartIconContainer, SpanItemCount, ShoppingIcon } from './cart-icon-styles.js';
import { selectCartCount, selectIsCartOpen } from '../../store/cart/cart-selector.js';
import { setCartDrop } from '../../store/cart/cart.actiontypes.js';

function ShopIcon() {
  const dispatch = useDispatch();
  const cartdroppeddown = useSelector(selectIsCartOpen);
  const cartcount = useSelector(selectCartCount);

  const toggleDropDown = () => {
    if (cartdroppeddown) {
      dispatch(setCartDrop(false));
    } else {
      dispatch(setCartDrop(true));
    }
  };

  return (
    <CartIconContainer onClick={toggleDropDown}>
      <ShoppingIcon />
      <SpanItemCount>{cartcount}</SpanItemCount>
    </CartIconContainer>

  );
}


export default ShopIcon;
