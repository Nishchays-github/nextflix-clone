import prop from "../utils/cosntants";
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addnowplayingmovies } from '../utils/moviesSlice';

const useNowplayingmovies = () => {
    const dispatch = useDispatch();
    const getNowPlayingMovies = async () => {
        const dataForNowPlayingMovies = await fetch('https://api.themoviedb.org/3/movie/now_playing?', prop.API_OPTIONS);
        const json = await dataForNowPlayingMovies.json();
        dispatch(addnowplayingmovies(json.results));
    }
    useEffect(() => {
        getNowPlayingMovies();
    }, [])
}

export default useNowplayingmovies
