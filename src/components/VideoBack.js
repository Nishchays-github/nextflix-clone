import React, { useEffect, useState } from 'react';
import prop from "../utils/cosntants";
import ReactPlayer from 'react-player/youtube';
import useFetch from "../hook/useFetchTrailer";

const VideoBack = ({ id }) => {
  const trailerURL = useFetch(id);

  if (!trailerURL) return null;

    return (
        <div className='relative'>
          <ReactPlayer
                url={trailerURL}
                width="100%"
                height="800px"
                muted={true}
                playing={true} // Autoplay
                playbackRate={1} 
            /></div>
    );
};

export default VideoBack;