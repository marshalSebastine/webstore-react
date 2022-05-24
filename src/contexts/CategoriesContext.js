import { createContext,useState,useEffect } from "react";
import { getAllProductsInCategories } from "../utils/firebase/firestore.utils";



export const categoriesContext = createContext({
    categories: {}
});

export const CategoriesProvider = ({children}) => {

    const [categories,setcategories] = useState({});
    useEffect(() => {

        const asyncgetallcategories = async() => {

            const productsdata = await getAllProductsInCategories('products');
            setcategories(productsdata);
        }
        asyncgetallcategories();
    },[])
    console.log(categories);
    const value = {categories};
    return(
        <categoriesContext.Provider value={value}>{children}</categoriesContext.Provider>
    )
    
}