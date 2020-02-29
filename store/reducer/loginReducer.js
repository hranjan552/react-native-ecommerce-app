const initialState = {
  isLoggedIn: false
};
const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SIGN_IN':
      return !state.isLoggedIn;

    default:
      return state;
  }
};

export default loginReducer;
