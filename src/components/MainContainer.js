import React from 'react'
import VideoTitle from './VideoTitle'
import VideoBackground from './VideoBackground'
import { useSelector } from 'react-redux'

function MainContainer() {

  const movies =  useSelector((store => store.movies?.nowPlayingMovies));

  if(!movies) return;

  const mainMovie = movies[0];
  const {original_title,overview} = mainMovie;

//   console.log(mainMovie);

  return (
    <div >
        <VideoTitle title={original_title} overview={overview}/>
        <VideoBackground movieId={mainMovie.id}/>
    </div>
  );
};

export default MainContainer