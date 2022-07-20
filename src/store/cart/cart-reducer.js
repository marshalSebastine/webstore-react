import { CART_ACTION_TYPE } from './cart.actiontypes';

const INITIAL_STATE = {
  cartdroppeddown: false,
  cartproducts: [],
  cartcount: 0,
  totalprice: 0,
};
// eslint-disable-next-line default-param-last
const cartReducer = (state = INITIAL_STATE, action = {}) => {
  const { type, payload } = action;
  switch (type) {
    case CART_ACTION_TYPE.SET_CARTDROP:
      return { ...state, cartdroppeddown: payload };
    case CART_ACTION_TYPE.SET_CARTITEMS:
      return { ...state, cartproducts: payload };
    default:
      return { ...state };
  }
};
export default cartReducer;
