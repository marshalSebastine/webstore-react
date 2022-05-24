import CategoriesPreview from "../categories-preview/categories-preview-component";
import { Route,Routes } from "react-router-dom";
import CategoryFullProducts from "../Category-Products-In-Shop/category-products-inshop";


const Shop = () => {
    return(<Routes>
        <Route index element = {<CategoriesPreview/>}/>
        <Route path=":category" element={<CategoryFullProducts/>}/>
    </Routes>)
}

export default Shop;