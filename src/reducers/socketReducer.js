import { getSochet } from '../types/socketTypes';

export const socketReducer = (state = {}, action) => {
  switch (action.type) {
    case getSochet:
      return {
        ...state,
        socket: action.payload.socket,
        online: action.payload.online,
      };
    default:
      return state;
  }
};
