/* eslint-disable no-param-reassign */
import { createSelector } from 'reselect';

const selectCategoryReducer = (state) => state.categories;

// eslint-disable-next-line max-len
export const selectCategories = createSelector([selectCategoryReducer], (categoriesslice) => categoriesslice.categoriesMap);

export const selectCategoriesMap = createSelector(
  [selectCategories],
  (categories) => categories.reduce((accu, { title, items }) => {
    accu[title.toLowerCase()] = items;
    return accu;
  }, {}),
);

export const selectCategoriesIsloading = createSelector(
  [selectCategoryReducer],
  (categoriesslice) => categoriesslice.isloading,
);


