import Product from "../products/products-components";
import { Link } from "react-router-dom";
import {CategoryPreviewContainer} from './category-preview-styles.js'

const CategoryPreview = ({title, product}) => {
return(
    <div>
        <h2>
            <Link to = {title}>
                {title.toUpperCase()}
            </Link>

        </h2>
        <CategoryPreviewContainer>
            {
                 product.filter((_,index) => index < 4).map((product) => {
                    return (<Product key={product.id} product={product}/>)
                 })
            }
        </CategoryPreviewContainer>
    </div>
)
}

export default CategoryPreview;