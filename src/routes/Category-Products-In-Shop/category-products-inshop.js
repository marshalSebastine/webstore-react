import { useEffect,useState, useContext} from "react"
import { categoriesContext } from "../../contexts/CategoriesContext"
import Product from "../../Components/products/products-components";
import { useParams } from "react-router-dom";
import { CategoryPreviewContainer } from "../../Components/category-preview/category-preview-styles";
const CategoryFullProducts = () => {
    const {category} = useParams();
    const {categories} = useContext(categoriesContext);
    const [products,setProducts] = useState(categories[category]);
    useEffect(() => {
        setProducts(categories[category])
    },[categories,category])
    return (    
    <div>
        <h2>
                {category.toUpperCase()}
        </h2>
        <CategoryPreviewContainer>
            {products &&
                 products.map((product) => {
                    return (<Product key={product.id} product={product}/>)
                 })
            }
        </CategoryPreviewContainer>
    </div>
    )
}


export default CategoryFullProducts;