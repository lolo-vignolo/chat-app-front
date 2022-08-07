import { useCallback, useEffect, useState } from 'react';
import { io } from 'socket.io-client';

export const useSocket = (serverPath) => {
  // esto me permite ver si esta offline o online. En el otro proyecto lo hice ocn redux
  const [online, setOnline] = useState(false);

  const [socket, setSocket] = useState(null);

  const connectSocketTemporal = useCallback(() => {
    const token = localStorage.getItem('token');
    const socket = io.connect(serverPath, {
      transports: ['websocket'],
      autoConnect: true,
      forceNew: true,
      query: { 'x-Token': token },
    });
    setSocket(socket);
  }, [serverPath, setSocket]);

  const desconnectSocketTemo = useCallback(() => {
    socket?.disconnect();
  }, [serverPath, socket]);

  useEffect(() => {
    setOnline(socket?.connected);
  }, [socket]);

  useEffect(() => {
    socket?.on('connect', () => setOnline(true));
  }, [socket]);

  useEffect(() => {
    socket?.on('disconnect', () => setOnline(false));
  }, [socket]);

  return {
    socket,
    online,
    connectSocketTemporal,
    desconnectSocketTemo,
  };
};
