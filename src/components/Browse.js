import Header from "./Header"
import MainCont from "./MainCont"
import SecCont from "./SecCont"
import React from 'react';
import useNowplayingmovies from "../hook/useNowplayingmovies"
import usePopularmovies from "../hook/usePopular";
import useTopmovies from "../hook/useTopRated";
import useUpcomingmovies from "../hook/useUpcoming";
import useTvshows from "../hook/useTvshows";
const Browse = () => {
  useNowplayingmovies();
  usePopularmovies();
  useTopmovies();
  useUpcomingmovies();
  useTvshows();
  return (
    <div className="">
      <Header /> 
      <MainCont/>
      <SecCont/>
    </div>
  )
}

export default Browse
