import React from 'react'
import MovieCard from './MovieCard'
const MovieList = ({ title, movies }) => {
    title = title.toUpperCase();
    console.log("++>",movies?.[3]);
    return (<>
        <div className="p-4">
            <h1 className="font-extrabold text-3xl text-white">{title}</h1>
            <div className="flex overflow-x-auto no-scrollbar">
                <div className="flex flex-row">
                    {
                        movies?.map(item => <div key={item?.id} className='m-2 border-opacity-50 hover:scale-110 transform-gpu cursor-pointer'><MovieCard movie={item?.poster_path} /></div>)
                    }
                </div>
            </div>
        </div>
    </>
    )
}

export default MovieList
