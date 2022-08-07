import {
  activeChat,
  clearChat,
  getUsers,
  setMessageFromDB,
  setNewMessage,
} from '../types/chatTypes';

const initialState = {
  uid: '',
  chatActivo: null, // UID del usuario al que yo quiero chatear
  usuarios: [], //todos los usuarios conectados
  mensajes: [], // mensajes con el chat activo (charActivo)
};

export const chatReducer = (state = initialState, action) => {
  switch (action.type) {
    case getUsers:
      return {
        ...state,
        usuarios: action.payload,
      };

    case activeChat:
      if (action.payload === state.chatActivo) return state;
      return {
        ...state,
        chatActivo: action.payload,
        mensajes: [],
      };

    case setNewMessage:
      // primer condicion le aparece solo al otro, segun condicion me aparece solo a mi. Dos condiciones, le aparecen a los dos.(NO ES NECESARIA)
      if (
        action.payload.from === state.chatActivo ||
        action.payload.to === state.chatActivo
      ) {
        return {
          ...state,
          mensajes: [...state.mensajes, action.payload],
        };
      } else {
        return state;
      }

    case setMessageFromDB:
      return {
        ...state,
        mensajes: [...action.payload],
      };

    case clearChat:
      return {
        ...state,
        uid: '',
        chatActivo: null,
        usuarios: [],
        mensajes: [],
      };
    default:
      return state;
  }
};
