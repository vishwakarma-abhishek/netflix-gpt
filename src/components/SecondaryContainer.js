import React from 'react'
import MoviesList from './MoviesList'
import { useSelector } from 'react-redux'
import usePopularMovies from '../hooks/usePopularMovies';

function SecondaryContainer() {
  const movies = useSelector((store)=>store.movies);

  

  return (
    <div className='bg-slate-800 text-white'>
      <div className='-mt-48 bg-transparent relative z-40'>
        <MoviesList title={"Now Playing"} movies={movies.nowPlayingMovies} > </MoviesList>
        <MoviesList title={"Popular Movies"} movies={movies.popularMovies} > </MoviesList>
        <MoviesList title={"Ucoming Movies"} movies={movies.upcomingMovies} > </MoviesList>
        <MoviesList title={"Top Rated"} movies={movies.topRatedMovies} > </MoviesList>
      </div>
    </div>
  )
}

export default SecondaryContainer