import React from 'react';
import { useSelector } from 'react-redux';
import VideoBack from './VideoBack';
import VideoTitle from './VideoTitle';
const MainCont = () => {
    const movies = useSelector((store) => store.movies?.nowplayingmovies);
    if (!movies) return null;
    const mainmovie = movies[0];
    const { original_title, overview, id } = mainmovie;

    return (
        <div >
            <VideoBack id={id} />
            <VideoTitle title={original_title} overview={overview} />
        </div>
    );
};

export default MainCont;
