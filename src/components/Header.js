import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import firebase from "../utils/firebase";
import { useSelector, useDispatch } from "react-redux";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { adduser, removeuser } from "../utils/userslice";
import prop from "../utils/cosntants";
import { toggleGPTview } from "../utils/gptslice";
import {changelang} from  "../utils/consfigSlice"
const Header = () => {
  const isgpt = useSelector((store) => store?.gpt?.showgpt);
  const auth = firebase();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [log, setlog] = useState(false);
  const handlesignout = () => {
    signOut(auth)
      .then(() => {
        navigate("/"); // Redirect to the homepage after signing out
      })
      .catch((error) => {
        navigate("/error");
      });
  };

  const Toggle_page = () => {
    dispatch(toggleGPTview());
  };
  const handleLangchange =(e)=>{
      dispatch(changelang(e.target.value));
  }

  useEffect(() => {
    const auth = getAuth();
    const t = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName } = user;
        dispatch(adduser({ uid: uid, email: email, displayName: displayName }));
        setlog(true);
        navigate("/browse");
      } else {
        dispatch(removeuser());
        setlog(false);
        navigate("/"); // Redirect to login page if not authenticated
      }
    });
    return () => t();
  }, []);

  return (
    <div className=" flex justify-between  w-screen px-8 py-2 bg-gradient-to-b from-black z-50 fixed">
      <img className="w-40 h-20" src={prop.netflix_logo} alt="nhi h" />
      <div className="flex justify-center">
        {isgpt && (
          <select
            className="bg-yellow-600 mr-3 text-white font-bold mt-6 h-10 px-2 border border-blue-700 rounded "
            name=""
            id=""
          onChange={handleLangchange}>
            {prop.langs.map(items=><option className="bg-purple-400" key={items.identifier} value={items.identifier}>{items.name}</option>)}
          </select>
        )}
        {(!isgpt && log && (
          <button
            onClick={Toggle_page}
            className ="bg-purple-400 h-12 mt-4 rounded-lg px-2"
          >
          take me to GPT
          </button>
        )) }
        {
          isgpt && (
            <button
              onClick={Toggle_page}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold mt-6 h-10 px-2 border border-blue-700 rounded "
            >
              BACK TO BROWSE
            </button>
          )
        }
        {log && (
          <img
            onClick={handlesignout}
            className="w-40 h-24 cursor-pointer"
            src={prop.logout}
            alt=""
          />
        )}
      </div>
    </div>
  );
};

export default Header;
