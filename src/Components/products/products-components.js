import Button from "../customButton/Button.component";
import './products-styles.scss';

const Product = ({product}) => {
    const {name,price,imageUrl} = product;
    return(
        <div className="product-card-container">
            <img src={imageUrl} alt={name}/>
            <div className="footer">
                <span className="name">{name}</span>
                <span className="price">{price}</span>
            </div>
            <Button buttonstyle={'inverted'} children={'Buy Now'}></Button>
        </div>
    );

}

export default Product;