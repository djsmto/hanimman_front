// PrivateRoute.js
import React from 'react';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ element }) => {
  const isAuthenticated = !!localStorage.getItem('authToken'); // 인증 여부 체크

  return isAuthenticated ? element : <Navigate to="/login" replace />;
};

export default PrivateRoute;
