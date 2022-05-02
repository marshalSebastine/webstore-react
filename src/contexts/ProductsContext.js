import { createContext,useState } from "react";
import PRODUCTS from '../shop-data.json';


export const productContext = createContext({
    products: PRODUCTS
});

export const ProductsProvider = ({children}) => {

    const [products,setProducts] = useState(PRODUCTS);
    const value = {products};
    return(
        <ProductsProvider.ProductsProvider value={value}>{children}</ProductsProvider.ProductsProvider>
    )
    
}