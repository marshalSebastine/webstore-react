/* eslint-disable react/jsx-no-useless-fragment */
import React from "react";
import { useSelector } from "react-redux";
import Spinner from "../../Components/spinner/spinner.components";
import { selectCategoriesMap, selectCategoriesIsloading } from "../../store/categories/categories.selector";
import CategoryPreviewComponent from "../../Components/category-preview/category-preview";


// eslint-disable-next-line react/function-component-definition
const CategoriesPreview = () => {

  const categories = useSelector(selectCategoriesMap);
  const isloading = useSelector(selectCategoriesIsloading);

  return (
    <>
      {isloading ? (<Spinner />)
        : (Object.keys(categories).map((title) => (
          <div key={title} className="all-products-container">
            <CategoryPreviewComponent key={title} title={title} product={categories[title]} />
          </div>
        )))}
    </>
  );
};

export default CategoriesPreview;
