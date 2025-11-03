import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

/**
 * PrivateRoute Component
 * Protects routes that require authentication
 * Redirects to login page if user is not authenticated
 */
const PrivateRoute = () => {
  // Check if user is authenticated
  // This checks for authentication token in localStorage
  const isAuthenticated = () => {
    const token = localStorage.getItem('authToken');
    return token !== null;
  };

  // If authenticated, render child routes using Outlet
  // If not authenticated, redirect to login page
  return isAuthenticated() ? <Outlet /> : <Navigate to="/login" replace />;
};

export default PrivateRoute;
