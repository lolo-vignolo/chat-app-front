import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import LoginPage from '../pages/LoginPage';
import RegisterPage from '../pages/RegisterPage';
import '../css/login-register.css';

const AuthRouter = () => {
  return (
    <div className="limiter">
      <div className="container-login100">
        <div className="wrap-login100 p-t-50 p-b-90">
          <Routes>
            <Route path="login" element={<LoginPage />} />
            <Route path="register" element={<RegisterPage />} />
            {/* con el "*" colocar tura entera, po rque de otra forma no funciona */}
            <Route path="*" element={<Navigate to="/auth/login" replace />} />
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default AuthRouter;
