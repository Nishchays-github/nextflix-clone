import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { signOut } from "firebase/auth";
import firebase from '../utils/firebase';
import { useSelector, useDispatch } from 'react-redux';
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useEffect } from 'react';
import { adduser, removeuser } from "../utils/userslice";
import prop from  "../utils/cosntants"
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
   const t =  onAuthStateChanged(auth, (user) => {
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
    return ()=> t();
  }, [])


  return (
    <div className=' flex justify-between  w-screen px-8 py-2 bg-gradient-to-b from-black z-50 fixed'>
      <img className='w-40 h-20' src={prop.netflix_logo} alt="nhi h" />
      <div className='flex justify-end'>
        { log && <img onClick={handlesignout} className='w-40 h-24 cursor-pointer' src={prop.logout} alt="" />
        }<h1 className='text-3xl'>{myname}</h1>
      </div>
    </div>
  )
}

export default Header;
