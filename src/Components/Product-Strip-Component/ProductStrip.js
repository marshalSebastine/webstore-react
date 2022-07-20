
import { useContext } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  CheckOutItemContainer, SpanStyleForQuantity,
  SpanStyleInProductStrip, ArrowInProductStrip, ValurSpan,
  RemoveButton, ImageContainer, ImageStylInProductStrip,
} from './Product-Strip-Styles.js';
import { selectCartItems } from '../../store/cart/cart-selector.js';
import { addItemToCart, reduceItemInCart, deleteCartItem } from '../../store/cart/cart.actiontypes';

function ProductStrip({ product }) {

  const dispatch = useDispatch();
  const {
    name, price, quantity, imageUrl,
  } = product;
  const cartitems = useSelector(selectCartItems);
  const clearItemHandler = () => dispatch(deleteCartItem(cartitems, product));
  const addItemHandler = () => dispatch(addItemToCart(cartitems, product));
  const removeItemHandler = () => dispatch(reduceItemInCart(cartitems, product));

  return (
    <CheckOutItemContainer>
      <ImageContainer>
        <ImageStylInProductStrip as="img" src={imageUrl} alt={`${name}`} />
      </ImageContainer>
      <SpanStyleInProductStrip as="span">
        {' '}
        {name}
        {' '}
      </SpanStyleInProductStrip>
      <SpanStyleForQuantity as="span">
        <ArrowInProductStrip as="span" onClick={removeItemHandler}>
          &#10094;
        </ArrowInProductStrip>
        <ValurSpan as="span">{quantity}</ValurSpan>
        <ArrowInProductStrip as="span" onClick={addItemHandler}>
          &#10095;
        </ArrowInProductStrip>
      </SpanStyleForQuantity>
      <ArrowInProductStrip className="price">
        {' '}
        {price}
      </ArrowInProductStrip>
      <RemoveButton onClick={clearItemHandler}>
        &#10005;
      </RemoveButton>
    </CheckOutItemContainer>

  );
}

export default ProductStrip;
