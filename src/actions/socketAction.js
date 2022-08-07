import { getSochet } from '../types/socketTypes';

export const getSocket = (socket, online) => {
  return {
    type: getSochet,
    payload: { socket, online },
  };
};
