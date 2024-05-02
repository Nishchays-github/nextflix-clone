import React from 'react';
import ReactPlayer from 'react-player/youtube';
import useFetch from "../hook/useFetchTrailer";

const VideoBack = ({ id }) => {
  const trailerURL = useFetch(id);

  if (!trailerURL) return null;

    return (
        <div className=''>
          <ReactPlayer
                url={trailerURL}
                width="100px"
                height="80px"
                muted={true}
                // playing={true} // Autoplay
                playbackRate={0.1} 
            /></div>
    );
};

export default VideoBack;