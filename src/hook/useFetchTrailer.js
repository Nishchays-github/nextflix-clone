// useFetchTrailer.js
import { useState, useEffect } from 'react';
import prop from "../utils/cosntants";

const useFetchTrailer = (id) => {
    const [trailerURL, setTrailerURL] = useState(null);

    const fetchData = async () => { 
        const response = await fetch(`https://api.themoviedb.org/3/movie/${id}/videos`, prop.API_OPTIONS);
        const data = await response.json();
        const ytKey = data.results[0]?.key;
        const ytTrailer = `https://www.youtube.com/watch?v=${ytKey}`;
        setTrailerURL(ytTrailer);
    };
    useEffect(() => {
        fetchData();
    }, []);
    return trailerURL;
};

export default useFetchTrailer;
