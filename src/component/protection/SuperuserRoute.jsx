import React from 'react';
import { Navigate } from 'react-router-dom';
import { isAuthenticated, isSuperUser } from '../../../auth';

const SuperuserRoute = ({ children }) => {
  if (!isAuthenticated()) {
    return <Navigate to="/login" />;
  }

  return isSuperUser() ? children : <Navigate to="/profile" />;
};

export default SuperuserRoute;
