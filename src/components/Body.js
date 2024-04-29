import React, { useEffect } from 'react';
import {RouterProvider, createBrowserRouter } from 'react-router-dom';
import Login from './Login';
import Browse from './Browse';
import { getAuth, onAuthStateChanged } from "firebase/auth";
import {useDispatch} from "react-redux"
import {adduser, removeuser} from "../utils/userslice"
const Body = () => {
  const dispatch =  useDispatch();
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
  useEffect(() => {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      if (user) { 
        const {uid,email,displayName} = user;
        dispatch(adduser({ uid: uid, email: email, displayName: displayName }));
      } else {
        dispatch(removeuser())
      }
    });
  
  }, [])
  return (
    <RouterProvider router={approuter} />
  );
};

export default Body;
