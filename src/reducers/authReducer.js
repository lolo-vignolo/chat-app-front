import {
  login,
  logout,
  register,
  renewToken,
  tokenError,
} from '../types/authActionsTypes';

const initialState = {
  uid: null,
  checking: true,
  logged: false,
  name: null,
  email: null,
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case login:
      return {
        ...state,
        uid: action.payload.uid,
        name: action.payload.name,
        email: action.payload.email,
        logged: true,
        checking: false,
      };

    case register:
      return {
        ...state,
        uid: action.payload.uid,
        name: action.payload.name,
        email: action.payload.email,
        logged: true,
        checking: false,
      };

    case renewToken:
      return {
        ...state,
        uid: action.payload.uid,
        name: action.payload.name,
        email: action.payload.email,
        logged: true,
        checking: false,
      };

    case tokenError:
      return {
        ...state,
        checking: false,
        logged: false,
      };

    case logout:
      return {
        ...state,
        uid: null,
        checking: false,
        logged: false,
        name: null,
        email: null,
      };

    default:
      return state;
  }
};
