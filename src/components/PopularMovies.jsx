import React from 'react'
import { useSelector } from 'react-redux'
import PopularCards from './cards/PopularCards'

const PopularMovies = () => {
    const value = useSelector((state) => state.moviesReducer.populermovies)

  return (
    <div>
      <div>PopularMovies</div>
      <div className="text-md gradient p-12 text-white flex">
        {value?.results?.slice(0, 4).map((item, i) => (
          <PopularCards value={item} key={i} />
        ))}
      </div>
    </div>
  )
}

export default PopularMovies