/* eslint-disable react/function-component-definition */
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { fetchCategoriesStart } from '../../store/categories/categories.actiontypes';
import CategoriesPreview from '../categories-preview/categories-preview-component';
import CategoryFullProducts from '../Category-Products-In-Shop/category-products-inshop';

const Shop = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCategoriesStart());
  }, []);
  return (
    <Routes>
      <Route
        index
        element={<CategoriesPreview />}
      />
      <Route path=":category" element={<CategoryFullProducts />} />
    </Routes>
  );
};

export default Shop;
