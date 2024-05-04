import {RouterProvider, createBrowserRouter } from 'react-router-dom';
import Login from './Login';
import Browse from './Browse';
import Gpt from './Gpt';

const Body = () => {
  const approuter = createBrowserRouter([

    {
      path: '/',
      element: <Login />,
    },
    {
      path: '/browse',
      element: <Browse />
    },
    {
      path:'/gpt',
      element:<Gpt/>,
    }
  ]);

  return (
    <RouterProvider router={approuter} />
  );
};

export default Body;
