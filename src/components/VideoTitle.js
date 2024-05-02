// VideoTitle.js
import React from 'react';

const VideoTitle = ({ title, overview }) => {
    return (
        <div className="absolute inset-y-0 left-0 flex flex-col justify-center text-white px-16 bg-transparent bg-gradient-to-r from-slate-900 w-4/6">
            <h1 className="text-4xl font-bold w-3/6">{title}</h1>
            <p className=" py-6 text-lg w-3/6">{overview}</p>
            <div className="flex">
                <button className="bg-white text-black p-3 px-12 text-lg bg-opacity-60 rounded-lg hover:bg-opacity-30">▶️ Play</button>
                <button className="mx-4 bg-gray-700 text-white  px-12 text-lg bg-opacity-60 rounded-lg hover:bg-opacity-30">More Info</button>
            </div>
        </div>
    );
};

export default VideoTitle;
