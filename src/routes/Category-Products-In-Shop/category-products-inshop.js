/* eslint-disable react/jsx-filename-extension */
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { selectCategoriesMap, selectCategoriesIsloading } from "../../store/categories/categories.selector";
import Product from "../../Components/products/products-components";
import CategoryPreviewContainer from "../../Components/category-preview/category-preview-styles";
import Spinner from "../../Components/spinner/spinner.components";

// eslint-disable-next-line react/function-component-definition
const CategoryFullProducts = () => {
  const { category } = useParams();
  const categoriesMap = useSelector(selectCategoriesMap);
  const [products, setProducts] = useState(categoriesMap[category]);
  const isloading = useSelector(selectCategoriesIsloading);

  useEffect(() => {
    setProducts(categoriesMap[category]);
  }, [category, categoriesMap]);

  return (
    <div>
      <h2>
        {category.toUpperCase()}
      </h2>
      { isloading ? (<Spinner />) : (
        <CategoryPreviewContainer>
          {products
                 && products.map((product) => (<Product key={product.id} product={product} />))}
        </CategoryPreviewContainer>
      )}
    </div>
  );
};


export default CategoryFullProducts;
