import { CATEGORIES_ACTION_TYPE } from './categories.actiontypes';

const INITIAL_STATE = {
  categoriesMap: [],
  isloading: false,
  error: null,
};
// eslint-disable-next-line default-param-last
const categoriesReducer = (state = INITIAL_STATE, action = {}) => {
  const { type, payload } = action;
  switch (type) {
    case CATEGORIES_ACTION_TYPE.FETCH_CATEGORIES_START:
      return { ...state, isloading: true };
    case CATEGORIES_ACTION_TYPE.FETCH_CATEGORIES_SUCCESS:
      return { ...state, categoriesMap: payload, isloading: false };
    case CATEGORIES_ACTION_TYPE.FETCH_CATEGORIES_FAILED:
      return { ...state, isloading: false, error: payload };
    default:
      return (state);
  }
};
export default categoriesReducer;
