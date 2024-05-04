import Header from "./Header";
import MainCont from "./MainCont";
import SecCont from "./SecCont";
import React from "react";
import useNowplayingmovies from "../hook/useNowplayingmovies";
import usePopularmovies from "../hook/usePopular";
import useTopmovies from "../hook/useTopRated";
import useUpcomingmovies from "../hook/useUpcoming";
import useTvshows from "../hook/useTvshows";
import Gpt from "./Gpt";
import { useSelector } from "react-redux";
const Browse = () => {
  const isgpt = useSelector((store) => store?.gpt?.showgpt);
  useNowplayingmovies();
  usePopularmovies();
  useTopmovies();
  useUpcomingmovies();
  useTvshows();
  return (
    <div className="">
      <Header />
      {isgpt ? (
        <Gpt />
      ) : (
        <>
          <MainCont />
          <SecCont />
        </>
      )}
    </div>
  );
};

export default Browse;
