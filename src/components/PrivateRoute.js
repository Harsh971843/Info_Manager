import React from 'react';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
    // Replace this with your actual authentication logic
    const isAuthenticated = localStorage.getItem('isAuthenticated') === 'false';

    return isAuthenticated ? children : <Navigate to="/" replace />;
};

export default PrivateRoute;
