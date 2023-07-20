import {
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  SIGNUP_SUCCESS,
  LOGOUT,
} from "../actions/authActions";

const initialState = {
  user: null,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return {
        ...state,
        user: action.payload,
      };
    case LOGIN_FAILURE:
      return {
        ...state,
        user: null,
        error: "Invalid username or password",
      };
    case SIGNUP_SUCCESS:
      return {
        ...state,
        user: action.payload,
        error: null,
      };
    case LOGOUT:
      return {
        ...state,
        user: null,
      };
    default:
      return state;
  }
};

export default authReducer;
