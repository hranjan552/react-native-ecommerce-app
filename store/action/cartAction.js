export const ADD_TO_CART = 'ADD_TO_CART';

export const addToCartAction = product => {
  return { type: ADD_TO_CART, product: product };
};

export const removeFromCartAction = product => {
  return { type: ADD_TO_CART, product: product };
};
