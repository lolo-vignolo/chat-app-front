import {
  activeChat,
  clearChat,
  getUsers,
  setMessageFromDB,
  setNewMessage,
} from '../types/chatTypes';

const getAllUsers = (usuarios) => {
  return {
    type: getUsers,
    payload: usuarios,
  };
};

export const thunkGetUsers = (usuarios) => {
  return (dispatch) => {
    dispatch(getAllUsers(usuarios));
  };
};

export const setChatActive = (uid) => {
  return {
    type: activeChat,
    payload: uid,
  };
};

export const addNewMessage = (message) => {
  return {
    type: setNewMessage,
    payload: message,
  };
};

const addMessagesfroDb = (messages) => {
  return {
    type: setMessageFromDB,
    payload: messages,
  };
};

export const thunkMessagesFromDb = (messages) => {
  return (dispatch) => {
    dispatch(addMessagesfroDb(messages));
  };
};

export const clearMessages = () => {
  return {
    type: clearChat,
  };
};
