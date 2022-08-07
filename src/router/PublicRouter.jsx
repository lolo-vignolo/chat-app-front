import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

export const PublicRouter = ({ children }) => {
  const auth = useSelector((state) => state.auth);

  return auth.logged ? <Navigate to="/chat" /> : children;
};
