import React from 'react'
import GptSearchbar from './GptSearchbar'
import prop from "../utils/cosntants"
const Gpt = () => {
  return (
    <div>
      <div className="absolute -z-10">
       <img className='bg-zinc-950' src={prop.back_img} alt="" />
       </div>
      <GptSearchbar/>
    </div>
  )
}

export default Gpt
