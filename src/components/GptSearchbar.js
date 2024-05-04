import React from 'react'
import prop from "../utils/cosntants"
import { useSelector } from 'react-redux'
const GptSearchbar = () => {
  const language = useSelector(store=>store.lang.langu)
  console.log(language);
  return (
    <div className="pt-[10%] flex justify-center rounded-lg">
      <form className='w-1/2 bg-black grid grid-cols-12'  action="">
        <input className='p-4 m-4 col-span-9' type="text" placeholder={prop.placeholders[language]} />
        <button className='col-span-3 m-4 py-2 px-4 rounded-lg bg-red-700'>
            {prop.btnholders[language]}
        </button>
      </form>
    </div>
  )
}

export default GptSearchbar
