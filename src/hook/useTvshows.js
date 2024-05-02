import prop from "../utils/cosntants";
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addtvshows } from '../utils/moviesSlice';

const useTvshows = () => {
    const dispatch = useDispatch();
    const getTV = async () => {
        const dataForNowPlayingMovies = await fetch('https://api.themoviedb.org/3/discover/tv', prop.API_OPTIONS);
        const json = await dataForNowPlayingMovies.json();
        dispatch(addtvshows(json.results));
    }
    useEffect(() => {
        getTV();
    }, [])
}

export default useTvshows;
