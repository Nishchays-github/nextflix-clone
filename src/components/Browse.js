import Header from "./Header"
import MainCont from "./MainCont"
import SecCont from "./SecCont"
import React from 'react';
import useNowplayingmovies from "../hook/useNowplayingmovies"
const Browse = () => {
  useNowplayingmovies();
  return (
    <div>
      <Header /> 
      <MainCont/>
    </div>
  )
}

export default Browse
