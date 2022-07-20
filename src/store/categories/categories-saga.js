import {
  takeLatest, call, put, all,
} from 'redux-saga/effects';
import { getAllProductsInCategories } from '../../utils/firebase/firestore.utils';
import { fetchCategoriesFailure, fetchCategoriesSuccess, CATEGORIES_ACTION_TYPE } from './categories.actiontypes';

export function* fetchCategoriesAsync() {
  try {
    const categoriesArray = yield call(getAllProductsInCategories, 'products');
    yield put(fetchCategoriesSuccess(categoriesArray));

  } catch (er) {
    yield put(fetchCategoriesFailure(er));
  }
}

export function* onFetchCategories() {
  yield takeLatest(
    CATEGORIES_ACTION_TYPE.FETCH_CATEGORIES_START,
    fetchCategoriesAsync,
  );
}

export function* categoriesSaga() {
  yield all([call(onFetchCategories)]);
}
