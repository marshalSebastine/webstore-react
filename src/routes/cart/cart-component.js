import { useSelector } from 'react-redux';
import { selectCartItems, selectCartTotal } from '../../store/cart/cart-selector.js';
import {
  TotalPriceDiv, HeaderBlock, CheckOutContainer, CheckOutHeader,
} from './cart-component-styles.js';
import ProductStrip from '../../Components/Product-Strip-Component/ProductStrip';
import PaymentForm from '../../Components/payment-form/payment-form-component.jsx';

function CartComponent() {

  const cartproducts = useSelector(selectCartItems);
  const totalprice = useSelector(selectCartTotal);

  return (

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
        cartproducts.map((product) => (<ProductStrip key={product.id} product={product} />))
    }
      <TotalPriceDiv>
        TOTAL: $
        {`${totalprice}`}
      </TotalPriceDiv>
      <PaymentForm />
    </CheckOutContainer>
  );
}

export default CartComponent;
