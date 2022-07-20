/* eslint-disable react/function-component-definition */
/* eslint-disable import/extensions */
/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-filename-extension */
import React from "react";
import { Link } from "react-router-dom";
import Product from "../products/products-components";
import CategoryPreviewContainer from './category-preview-styles.js';

const CategoryPreviewComponent = ({ title, product }) => (
  <div>
    <h2>
      <Link to={title}>
        {title.toUpperCase()}
      </Link>

    </h2>
    <CategoryPreviewContainer>
      {
                 // eslint-disable-next-line no-shadow
                 product.filter((_, index) => index < 4).map((product) =>
                   // eslint-disable-next-line implicit-arrow-linebreak
                   (<Product key={product.id} product={product} />))
            }
    </CategoryPreviewContainer>
  </div>
);

export default CategoryPreviewComponent;
