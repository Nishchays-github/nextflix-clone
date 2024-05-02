import React from 'react'
import prop from '../utils/cosntants'
const MovieCard = ({movie}) => {
    
  return (
    <div className='w-48 border-opacity-45'>
      <img  src={prop.IMG_CDN+movie} alt="" />      
    </div>
  )
}

export default MovieCard
