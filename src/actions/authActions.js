import { fetchSinToken, fetchWithToken } from '../helpers/fetch';
import {
  login,
  logout,
  register,
  renewToken,
  tokenError,
} from '../types/authActionsTypes';

const setLogin = (userDB) => {
  return {
    type: login,
    payload: {
      uid: userDB.uid,
      name: userDB.name,
      email: userDB.email,
    },
  };
};

export const thunkLogin = (email, password) => {
  return async (dispatch) => {
    const data = await fetchSinToken('login', { email, password }, 'POST');
    if (data.ok) {
      localStorage.setItem('token', data.token);
      dispatch(setLogin(data.userDB));
      return data.ok;
    } else {
      console.log(data.msg);
    }
  };
};

const setRegister = (newUser) => {
  return {
    type: register,
    payload: {
      uid: newUser.uid,
      name: newUser.name,
      email: newUser.email,
    },
  };
};

export const thunkRegister = (name, email, password) => {
  return async (dispatch) => {
    const data = await fetchSinToken(
      'login/new',
      { name, email, password },
      'POST'
    );
    if (data.ok) {
      localStorage.setItem('token', data.token);
      dispatch(setRegister(data.newUser));
      return data.ok;
    } else {
      console.log(data.msg);
    }
  };
};

const renew = (user) => {
  return {
    type: renewToken,
    payload: { uid: user.uid, name: user.name, email: user.email },
  };
};

const wrongToken = () => {
  return {
    type: tokenError,
    payload: {
      checking: false,
      logged: false,
    },
  };
};

export const thunkRenewToken = () => {
  const token = localStorage.getItem('token');

  return async (dispatch) => {
    if (!token) {
      dispatch(wrongToken());
      return false;
    }
    const date = await fetchWithToken('login/renew');
    if (date.ok) {
      localStorage.setItem('token', date.token);
      dispatch(renew(date.user));
      return date.ok;
    } else {
      dispatch(wrongToken());
      return false;
    }
  };
};

export const setLogoutAuth = () => {
  return {
    type: logout,
  };
};
