import React from 'react'
import Header from './Header'
import { useState,useRef} from 'react'
import validate from '../utils/validate'
import {createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth"
import firebase from '../utils/firebase'
import { useNavigate } from 'react-router-dom'
import {useDispatch} from "react-redux"
import  {adduser} from "../utils/userslice"
const Login = () => {
  const [signup, setsignup] = useState(true);
  const dispatch =  useDispatch();
  const [valid, setvalid] = useState(null);
  const navigate = useNavigate();
  const auth = firebase();
  const email = useRef(null);
  const password = useRef(null);
  const toggle = () => {
    setsignup(!signup);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const mail = email.current.value;
    const pass = password.current.value;
    const ret = validate(mail, pass);
    setvalid(ret);
    if (ret) return;

    if (!signup) {
      const auth = firebase();
      // sign up logic
      createUserWithEmailAndPassword(auth, mail, pass)
        .then((userCredential) => {
          const user = userCredential.user;
          console.log('User created:', user);
          console.log("navii",navigate);
          navigate("/browse");
        }).then(()=>{
          const {uid,email,displayName} = auth.currentUser;
        dispatch(adduser({ uid: uid, email: email, displayName: displayName }));
  
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.error('Error:', errorCode, errorMessage);
        });
    }
    else {
        signInWithEmailAndPassword(auth, mail, pass)
      .then((userCredential) => {
        navigate("/browse");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
        setvalid(errorCode)
      });
    }
  }

  return (
    <>
      <Header />
      <div className='absolute '>
        <img className='bg-zinc-950 ' src="https://assets.nflxext.com/ffe/siteui/vlv3/c7f07b68-7989-4ff7-a31e-11c17dcc2fea/fcf685b8-3f9f-42d8-9af3-4bb86fa5a3b8/IN-en-20240422-popsignuptwoweeks-perspective_alpha_website_small.jpg" alt="" />
      </div>
      <form onSubmit={handleSubmit} id="form" className='absolute bhg bg-zinc-950 w-3/12 my-36 mx-auto right-0 left-0 p-12 rounded-lg bg-opacity-85 text-white'>
        <h1 className='font-bold text-3xl p-4 text-white'>{signup ? "Sign IN" : "Sign up"}</h1>
        {
          !signup && <input type="text" placeholder='full name' className='p-4 my-2 text-white w-full bg-black' />
        }
        <input ref={email} type="text" name='email' id='email' placeholder='Email address' className='p-4 my-2 text-white w-full bg-black ' />
        <input ref={password} type="password" name='pass' id='pass' placeholder='Password' className='p-4 my-2 text-white w-full bg-black ' />
        <p className='text-red-500 m-4 text-sm'>{valid}</p>
        <button type="submit" className="bg-gray-300 p-4 my-2 bg-red-700 w-full">{signup ? "Sign IN" : "Sign up"}</button>
        
        <p className='text-white  mt-5 py-4 cursor-pointer' onClick={toggle}>new to netflix ?</p>
        </form>
    </>
  )
}

export default Login
