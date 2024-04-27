import React from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Login from './Login';
import Browse from './Browse';

// Define the routes
const approuter = createBrowserRouter([
   
  {
    path: '/',
    element: <Login />,
  },
  {
    path: '/browse',
    element: <Browse />
  }
]);

// Wrap the entire application in RouterProvider
const Body = () => {
  return (
    <RouterProvider router={approuter}/>
  );
};

export default Body;
