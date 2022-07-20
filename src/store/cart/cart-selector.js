import { createSelector } from "reselect";

const selectCartReducer = (state) => state.cart;

export const selectIsCartOpen = createSelector(
  [selectCartReducer],
  (cartstate) => cartstate.cartdroppeddown,
);

export const selectCartItems = createSelector(
  [selectCartReducer],
  (cartstate) => cartstate.cartproducts,
);

export const selectCartTotal = createSelector(
  [selectCartItems],
  (cartitems) => cartitems.reduce(
    (total, cartitem) => total + cartitem.quantity * cartitem.price,
    0,
  ),
);

export const selectCartCount = createSelector(
  [selectCartItems],
  (cartitems) => cartitems.reduce(
    (total, item) => total + item.quantity,
    0,
  ),
);
