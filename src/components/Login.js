import React from 'react'
import Header from './Header'
import { useState ,useRef} from 'react'
import validate from '../utils/validate'
const Login = () => {
    const [signup, setsignup] = useState(true);
    const mail = useRef(null);
    const pass = useRef(null);
    const [valid,setvalid] = useState(null);
    const toggle=()=>{
            setsignup(!signup);
    }
    const handleclick = () => {
        const ret = validate(mail.current.value,pass.current.value);
        setvalid(ret);
    }
    
  return (
    <>
    <Header/>
    <div className='absolute'>
        <img className='bg-zinc-950' src="https://assets.nflxext.com/ffe/siteui/vlv3/c7f07b68-7989-4ff7-a31e-11c17dcc2fea/fcf685b8-3f9f-42d8-9af3-4bb86fa5a3b8/IN-en-20240422-popsignuptwoweeks-perspective_alpha_website_small.jpg" alt="" />
    </div>
    <form onSubmit={(e)=>e.preventDefault()} id= "form" className='absolute bhg bg-zinc-950 w-3/12 my-36 mx-auto right-0 left-0 p-12 rounded-lg bg-opacity-85 text-white'>
        <h1 className='font-bold text-3xl p-4 text-white'>{signup?"Sign IN":"Sign up"}</h1>
        {
        signup && <input type="text"  placeholder='full name' className='p-4 my-2 text-white w-full bg-black'/>
        }
        <input ref={mail} type="text"  id = 'email'placeholder='Email address' className='p-4 my-2 text-white w-full bg-black '/>
        <input ref={pass}  type="text" id='pass' placeholder='Password' className='p-4 my-2 text-white w-full bg-black ' />
        <p className='text-red-500 m-4'>{valid}</p>
        <button className="bg-gray-300 p-4 my-2 bg-red-700 w-full" onClick={handleclick}>{signup?"Sign IN":"Sign up"}</button>
        <p className='text-white mt-5 py-4 cursor-pointer'  onClick={toggle}>new to netflix ?<a className='underline'>click to</a>  sign up</p>
    </form>
    </>
  )
}

export default Login
