import React, { useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import Spinner from '../helpers/Spinner';
import ChatPage from '../pages/ChatPage';
import AuthRouter from './AuthRouter';
import { thunkRenewToken } from '../actions/authActions';
import { PublicRouter } from './PublicRouter';
import { PrivateRouter } from './PrivateRouter';

const AppRouter = () => {
  const dispatch = useDispatch();
  const authState = useSelector((state) => state.auth);

  useEffect(() => {
    dispatch(thunkRenewToken());
  }, [dispatch]);

  if (authState.checking) {
    return <Spinner />;
  }

  return (
    <div>
      <Routes>
        <Route
          path="/"
          element={
            <PrivateRouter>
              <ChatPage />
            </PrivateRouter>
          }
        />
        <Route
          path="/auth/*"
          element={
            <PublicRouter>
              <AuthRouter />
            </PublicRouter>
          }
        />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </div>
  );
};

export default AppRouter;
