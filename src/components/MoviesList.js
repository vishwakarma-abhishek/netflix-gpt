import React from 'react'
import MovieCard from './MovieCard'

function MoviesList({title, movies}) {
    // console.log(movies);
  return (
    <>
      {movies && (
        <div className='py-0 px-2'>
          <h1 className='text-3xl py-3'>{title}</h1>
          <div className="flex overflow-x-scroll scrollbar-hide">
            <div className="flex gap-2">
              {movies.map((movie) => (
                <MovieCard key={movie.id} movie={movie} />
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default MoviesList