import {TotalPriceDiv,HeaderBlock,CheckOutContainer,CheckOutHeader} from './cart-component-styles.js';
import ProductStrip from '../../Components/Product-Strip-Component/ProductStrip';
import { useContext } from 'react';
import { CartContext } from '../../contexts/CartContext';

const CartComponent = () => {

    const {cartproducts,totalprice} = useContext(CartContext);

    return(

    <CheckOutContainer>
    <CheckOutHeader>
      <HeaderBlock>
        <span>Product</span>
      </HeaderBlock>
      <HeaderBlock>
        <span>Description</span>
      </HeaderBlock>
      <HeaderBlock>
        <span>Quantity</span>
      </HeaderBlock>
      <HeaderBlock>
        <span>Price</span>
      </HeaderBlock>
      <HeaderBlock>
        <span>Remove</span>
      </HeaderBlock>
    </CheckOutHeader>
    {
        cartproducts.map(product => {
            return(<ProductStrip key={product.id} product={product}/>);
        })
    }
    <TotalPriceDiv>TOTAL: ${`${totalprice}`} </TotalPriceDiv>
  </CheckOutContainer>
    );
}

export default CartComponent;