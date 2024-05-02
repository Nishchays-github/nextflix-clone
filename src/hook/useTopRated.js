import prop from "../utils/cosntants";
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addtopmovies } from '../utils/moviesSlice';

const useTopmovies = () => {
    const dispatch = useDispatch();
    const getTopMovies = async () => {
        const dataForNowPlayingMovies = await fetch('https://api.themoviedb.org/3/movie/top_rated?', prop.API_OPTIONS);
        const json = await dataForNowPlayingMovies.json();
        dispatch(addtopmovies(json.results));
    }
    useEffect(() => {
        getTopMovies();
    }, [])
}

export default useTopmovies
