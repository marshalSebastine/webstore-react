import { getAllProductsInCategories } from "../../utils/firebase/firestore.utils";

export const CATEGORIES_ACTION_TYPE = {
  FETCH_CATEGORIES_START: 'categories/FETCH_CATEGORIES_START',
  FETCH_CATEGORIES_SUCCESS: 'category/FETCH_CATEGORIES_SUCCESS',
  FETCH_CATEGORIES_FAILED: 'category/FETCH_CATEGORIES_FAILED',
};

export const fetchCategoriesStart = () => ({
  type: CATEGORIES_ACTION_TYPE.FETCH_CATEGORIES_START,
});

export const fetchCategoriesSuccess = (categoriesArray) => ({
  type: CATEGORIES_ACTION_TYPE.FETCH_CATEGORIES_SUCCESS,
  payload: categoriesArray,
});

export const fetchCategoriesFailure = (error) => ({
  type: CATEGORIES_ACTION_TYPE.FETCH_CATEGORIES_FAILED,
  payload: error,
});

export const fetchCategoriesStartAsync = () => async (dispatch) => {

  dispatch(fetchCategoriesStart());
  try {
    const categoriesarray = await getAllProductsInCategories('products');
    dispatch(fetchCategoriesSuccess(categoriesarray));
  } catch (er) {
    dispatch(fetchCategoriesFailure(er));
  }

};



