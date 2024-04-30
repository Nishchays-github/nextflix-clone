import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { signOut } from "firebase/auth";
import firebase from '../utils/firebase';
import { useSelector, useDispatch } from 'react-redux';
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useEffect } from 'react';
import { adduser, removeuser } from "../utils/userslice";

const Header = () => {
  const myname = useSelector(store => store?.user?.displayName);
  const auth = firebase();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [log, setlog] = useState(false);
  const handlesignout = () => {
    signOut(auth).then(() => {
      navigate("/"); // Redirect to the homepage after signing out
    }).catch((error) => {
      navigate("/error");
    });
  }


  useEffect(() => {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName } = user;
        dispatch(adduser({ uid: uid, email: email, displayName: displayName }));
        setlog(true);
        navigate("/browse")
      } else {
        dispatch(removeuser());
        setlog(false);
        navigate("/"); // Redirect to login page if not authenticated
      }
    });
  }, [])





  return (
    <div className='absolute flex justify-between  w-screen px-8 py-2 bg-gradient-to-b from-black z-10'>
      <img className='w-40 h-20' src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png" alt="nhi h" />
      <div className='flex justify-end'>
        { log && <img onClick={handlesignout} className='w-40 h-24 cursor-pointer' src="https://cdn-icons-png.flaticon.com/512/14018/14018685.png" alt="" />
        }<h1 className='text-3xl'>{myname}</h1>
      </div>
    </div>
  )
}

export default Header;
