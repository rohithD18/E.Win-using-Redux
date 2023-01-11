const initialState = {
  userData: null,
};
export const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOGIN_INFO":
      return {
        ...state,
        userData: action.payload,
      };
    case "LOGOUT":
      return {
        ...state,
        userData: null,
      };
    default:
      return state;
  }
};
