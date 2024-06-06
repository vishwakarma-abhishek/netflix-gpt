import React from 'react'
import { IMAGE_CND_URL } from '../utils/constant'

function MovieCard({movie}) {
  return (
    <div className='w-64' >
      <img alt='movie img' src={IMAGE_CND_URL+movie?.poster_path}></img>
    </div>
  )
}

export default MovieCard