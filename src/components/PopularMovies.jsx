import React from 'react'
import PopularCard from './cards/PopularCard'
import { populerMovieLimit } from '../features/AppSettings'


const PopularMovies = ({popular}) => {

  return (
    <div>
      <div>PopularMovies</div>
      <div className="text-md gradient flex p-12 text-white">
        {popular?.results?.slice(0, populerMovieLimit).map((item, i) => (
          <PopularCard value={item} key={i} />
        ))}
      </div>
    </div>
  )
}

export default PopularMovies