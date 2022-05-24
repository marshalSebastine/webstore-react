import {NameHStyle,CartItemContainer,ItemDetailsStyle,ImageStyle} from'./cart-item-styles.js'

const CartItem = ({cartitem}) => {

    const {imageUrl,name,price,quantity} = cartitem;

    return(
      <CartItemContainer>
        <ImageStyle as = 'img'src={imageUrl} alt={name}></ImageStyle>
        <ItemDetailsStyle>
              <NameHStyle as= 'h1'>{name}</NameHStyle>
              <span >{`$ ${price} x ${quantity}`}</span>
  
        </ItemDetailsStyle>
      </CartItemContainer>
    )
}

export default CartItem;