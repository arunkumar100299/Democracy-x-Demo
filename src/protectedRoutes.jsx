/* eslint-disable react/prop-types */
import React from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoutes = ({ children }) => {
  // const { user } = useAuth();
  const user = true;
  if (user) {
    return children;
  } else {
    return <Navigate to="/test" />;
  }
};

export default ProtectedRoutes;
