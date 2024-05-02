import prop from "../utils/cosntants";
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addupcoming } from '../utils/moviesSlice';

const useUpcomingmovies = () => {
    const dispatch = useDispatch();
    const getUpMovies = async () => {
        const dataForNowPlayingMovies = await fetch('https://api.themoviedb.org/3/movie/upcoming?', prop.API_OPTIONS);
        const json = await dataForNowPlayingMovies.json();
        dispatch(addupcoming(json.results));
    }
    useEffect(() => {
        getUpMovies();
    }, [])
}

export default useUpcomingmovies
