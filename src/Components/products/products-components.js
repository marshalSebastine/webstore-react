import Button,{BUTTON_TYPE_CLASSES} from "../customButton/Button.component";
import {ProductCardContainer, NameSpan, FooterInProducts, PriceSpan} from './products-styles.js';
import { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";


const Product = ({product}) => {
    const {name,price,imageUrl} = product;
    const {addItemToCart} = useContext(CartContext);
    const includeInCart = () => addItemToCart(product)
    return(
        <ProductCardContainer >
            <img src={imageUrl} alt={name}/>
            <FooterInProducts>
                <NameSpan>{name}</NameSpan>
                <PriceSpan>{price}</PriceSpan>
            </FooterInProducts>
            <Button buttonstyle={BUTTON_TYPE_CLASSES.inverted} children={'Buy Now'} onClick={includeInCart}></Button>
        </ProductCardContainer>
    );

}

export default Product;