/* eslint-disable react/no-children-prop */
/* eslint-disable import/extensions */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/prop-types */
import { useDispatch, useSelector } from "react-redux";
import Button, { BUTTON_TYPE_CLASSES } from "../customButton/Button.component";
import { addItemToCart } from "../../store/cart/cart.actiontypes";
import { selectCartItems } from "../../store/cart/cart-selector";
import {
  ProductCardContainer, NameSpan, FooterInProducts, PriceSpan,
} from './products-styles.js';



function Product({ product }) {
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);
  const { name, price, imageUrl } = product;
  const includeInCart = () => dispatch(addItemToCart(cartItems, product));
  return (
    <ProductCardContainer>
      <img src={imageUrl} alt={name} />
      <FooterInProducts>
        <NameSpan>{name}</NameSpan>
        <PriceSpan>{price}</PriceSpan>
      </FooterInProducts>
      <Button buttonstyle={BUTTON_TYPE_CLASSES.inverted} children="Buy Now" onClick={includeInCart} />
    </ProductCardContainer>
  );

}

export default Product;
