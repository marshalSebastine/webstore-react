import { Fragment, useContext } from "react";
import { categoriesContext } from "../../contexts/CategoriesContext";
import CategoryPreview from "../../Components/category-preview/category-preview";


const CategoriesPreview = () => {
        
    const {categories} = useContext(categoriesContext);
    console.log(categories)
    console.log("frmom me")
    return(
        <Fragment>
            {Object.keys(categories).map((title) => {
                return(
                    <div key={title} className="all-products-container">
                        {
                            <CategoryPreview title={title} product={categories[title]}/>
                        }
                    </div>
                );
            })}
        </Fragment>
    );
}

export default CategoriesPreview;