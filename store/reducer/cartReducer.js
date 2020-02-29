import { ADD_TO_CART } from '../action/cartAction';

const initialState = {
  cartItems: [],
  totalAmount: 0
};

export const addToCartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      const addedProduct = action.product;
      const productPrice = addedProduct.price;
      const productTitle = addedProduct.title;
      const chkIndex = state.items.findIndex(cartItem => {
        return cartItem.id === addedProduct.id;
      });
      if (chkIndex !== -1) {
        return {
          ...state,
          cartItems: (state.cartItems[chkIndex].quantity += 1),
          totalAmount: (state.totalAmount += productPrice)
        };
      } else {
        const newProduct = {
          id: addedProduct.id,
          product_title: productTitle,
          product_price: productPrice,
          quantity: 1
        };
        return {
          ...state,
          cartItems: state.cartItems.push(newProduct),
          totalAmount: (state.totalAmount += productPrice)
        };
      }

    default:
      return state;
  }
};
