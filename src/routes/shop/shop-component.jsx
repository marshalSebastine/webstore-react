import { useContext } from "react";
import Product from "../../Components/products/products-components";
import { productContext } from "../../contexts/ProductsContext";
import './shop-styles.scss';

const Shop = () => {
        
    const {products} = useContext(productContext);
    return(
        <div className="all-products-container">
            {
                products.map((product) => {
                    return(<Product key={product.id} product = {product}/>);
                })
            }
        </div>
    );


}

export default Shop;