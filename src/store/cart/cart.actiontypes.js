export const CART_ACTION_TYPE = {
  SET_CARTDROP: 'cart/SET_CARTDROP',
  SET_CARTITEMS: 'cart/SET_CARTITEMS',
};

const addtocart = (cartproducts, selectedproduct) => {
  const existingproduct = cartproducts.find(
    (cartitem) => cartitem.id === selectedproduct.id,
  );

  if (existingproduct) {
    return cartproducts.map(
      // eslint-disable-next-line max-len
      (product) => (product.id === selectedproduct.id ? { ...product, quantity: product.quantity + 1 }
        : { ...product }),
    );
  }

  return ([...cartproducts, { ...selectedproduct, quantity: 1 }]);
};
const minusFromCart = (cartproducts, selectedproduct) => {
  if (selectedproduct.quantity === 1) {
    return cartproducts.filter((product) => product.id !== selectedproduct.id);
  }
  return (cartproducts.map((product) =>
  // eslint-disable-next-line max-len,implicit-arrow-linebreak
    (product.id === selectedproduct.id ? { ...product, quantity: product.quantity - 1 } : { ...product })));
};

const removeFromCart = (cartproducts, selectedproduct) =>
  // eslint-disable-next-line implicit-arrow-linebreak
  cartproducts.filter((product) => product.id !== selectedproduct.id);

export const addItemToCart = (cartproducts, selectedproduct) => {
  const updatedcartproducts = addtocart(cartproducts, selectedproduct);
  return ({ type: CART_ACTION_TYPE.SET_CARTITEMS, payload: updatedcartproducts });
};


export const reduceItemInCart = (cartproducts, selectedproduct) => {
  const updatedcartproducts = minusFromCart(cartproducts, selectedproduct);
  return ({ type: CART_ACTION_TYPE.SET_CARTITEMS, payload: updatedcartproducts });
};

export const deleteCartItem = (cartproducts, selectedproduct) => {
  const updatedcartproducts = removeFromCart(cartproducts, selectedproduct);
  return ({ type: CART_ACTION_TYPE.SET_CARTITEMS, payload: updatedcartproducts });
};

export const setCartDrop = (boolean) => ({ type: CART_ACTION_TYPE.SET_CARTDROP, payload: boolean });
