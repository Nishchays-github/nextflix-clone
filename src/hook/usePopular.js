import prop from "../utils/cosntants";
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addpopularmovies } from '../utils/moviesSlice';

const usePopularmovies = () => {
    const dispatch = useDispatch();
    const getpopularMovies = async () => {
        const dataForNowPlayingMovies = await fetch('https://api.themoviedb.org/3/movie/popular?', prop.API_OPTIONS);
        const json = await dataForNowPlayingMovies.json();
        dispatch(addpopularmovies(json.results));
    }
    useEffect(() => {
        getpopularMovies();
    }, [])
}

export default usePopularmovies
