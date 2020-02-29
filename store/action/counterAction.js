export const addToCartAction = prodObj => {
  return { type: 'INCREMENT', product: prodObj };
};

export const removeFromCartAction = prodObj => {
  return { type: 'DECREMENT', product: prodObj };
};
