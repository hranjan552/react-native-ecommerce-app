const initialState = {
  mycounter: 0,
  cartItems: [],
  totalAmount: 0
};
const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'INCREMENT':
      let chkIndex = state.cartItems.findIndex(cartItem => {
        return cartItem.id === action.product.id;
      });
      if (chkIndex !== -1) {
        let arr = [...state.cartItems];
        arr[chkIndex] = {
          ...arr[chkIndex],
          ['quantity']: arr[chkIndex].quantity + 1
        };
        return {
          ...state,
          cartItems: arr,
          totalAmount: state.totalAmount + action.product.price
        };
      } else {
        const newData = {
          id: action.product.id,
          title: action.product.title,
          image: action.product.image,
          price: action.product.price,
          quantity: 1
        };
        return {
          ...state,
          cartItems: [...state.cartItems, newData],
          totalAmount: state.totalAmount + action.product.price
        };
      }

    case 'DECREMENT':
      let chkIndex1 = state.cartItems.findIndex(cartItem => {
        return cartItem.id === action.product.id;
      });

      let arr1 = [...state.cartItems];
      if (arr1[chkIndex1].quantity > 1) {
        arr1[chkIndex1] = {
          ...arr1[chkIndex1],
          ['quantity']: arr1[chkIndex1].quantity - 1
        };
        return {
          ...state,
          cartItems: arr1,
          totalAmount: state.totalAmount - action.product.price
        };
      } else {
        return {
          ...state,
          cartItems: [
            ...state.cartItems.slice(0, chkIndex1),
            ...state.cartItems.slice(chkIndex1 + 1)
          ],
          totalAmount: state.totalAmount - action.product.price
        };
      }
    default:
      return state;
  }
};

export default counterReducer;
