import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useSocket } from '../hooks/useSocket';

import { getSocket } from '../actions/socketAction';
import { addNewMessage, thunkGetUsers } from '../actions/chatActions';
import { scrollBottomAnimated } from '../helpers/scrollBottom';

const Context = ({ children }) => {
  //TODO: mover a un haigher order component
  const dispatch = useDispatch();
  const { logged } = useSelector((state) => state.auth);
  // const { usuarios } = useSelector((state) => state.chat);
  const { socket, online, connectSocketTemporal, desconnectSocketTemo } =
    useSocket('http://localhost:8080');

  useEffect(() => {
    if (logged) {
      connectSocketTemporal();
    }
  }, [logged, connectSocketTemporal]);

  useEffect(() => {
    if (!logged) {
      desconnectSocketTemo();
    }
  }, [logged, desconnectSocketTemo]);

  useEffect(() => {
    if (online) {
      dispatch(getSocket(socket, online));
    }
  }, [dispatch, online, socket]);

  useEffect(() => {
    socket?.on('lista-usuarios', (usuarios) => {
      dispatch(thunkGetUsers(usuarios));
    });
  }, [socket, dispatch]);

  useEffect(() => {
    //ESTO SOLO LO RECIBE LA PERSONA ESPECIFICA CON EL UID QUE DECRETE EN EL BACK. (estructura del mensaje = estructura base de datos)
    socket?.on('personal-message', (mensaje) => {
      dispatch(addNewMessage(mensaje));
      scrollBottomAnimated('messagesDown');
    });
  }, [socket]);
  return <>{children}</>;
};

export default Context;
