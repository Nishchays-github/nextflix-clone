import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux'

const Seccont = () => {
  const movies = useSelector((store) => store.movies?.nowplayingmovies);
  const movies2 = useSelector((store)=>store.movies?.popularmovies);
  const movies3 = useSelector((store)=>store.movies?.topmovies);
  const movies4 = useSelector((store)=>store.movies?.upcoming);
  const movies5 = useSelector((store)=>store.movies?.tvshows);
  return (
    <div className=" bg-black">
      <div className='-mt-48 pl-12 relative z-30 mb-10'>
      <MovieList title={"now playing"} movies ={movies}/>
      <MovieList title={"Popular"} movies ={movies2}/>
      <MovieList title={"Top rated"} movies ={movies3}/>
      <MovieList title={"Upcoming"} movies ={movies4}/>
      <MovieList title={"Tv shows"} movies ={movies5}/>
      </div>
    </div>
  )
}

export default Seccont
