
import {CheckOutItemContainer,SpanStyleForQuantity,
  SpanStyleInProductStrip,ArrowInProductStrip,ValurSpan,
RemoveButton,ImageContainer,ImageStylInProductStrip} from './Product-Strip-Styles.js';
import { CartContext } from '../../contexts/CartContext';
import { useContext } from 'react';

const ProductStrip = ({product}) => {
   
    const {name,price,quantity,imageUrl} = product;
    const {addItemToCart,reduceItemFromCart,removeItemFromCart} = useContext(CartContext);
    const clearItemHandler = () => removeItemFromCart(product);
    const addItemHandler = () => addItemToCart(product);
    const removeItemHandler = () => reduceItemFromCart(product);
  
    return (
<CheckOutItemContainer>
      <ImageContainer>
        <ImageStylInProductStrip as='img'  src={imageUrl} alt={`${name}`} />
      </ImageContainer>
      <SpanStyleInProductStrip as='span'> {name} </SpanStyleInProductStrip>
      <SpanStyleForQuantity as='span'>
        <ArrowInProductStrip as='span' onClick={removeItemHandler}>
          &#10094;
        </ArrowInProductStrip>
        <ValurSpan as='span'>{quantity}</ValurSpan>
        <ArrowInProductStrip as='span' onClick={addItemHandler}>
          &#10095;
        </ArrowInProductStrip>
      </SpanStyleForQuantity>
      <ArrowInProductStrip className='price'> {price}</ArrowInProductStrip>
      <RemoveButton onClick={clearItemHandler}>
        &#10005;
      </RemoveButton>
    </CheckOutItemContainer>

    );
}

export default ProductStrip;