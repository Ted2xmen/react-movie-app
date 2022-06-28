import React from 'react'
import PopularCard from './cards/PopularCard'
import { populerMovieLimit } from '../features/AppSettings'

const PopularMovies = ({popular, loading}) => {

  return (
    <div>
      <div className="text-md  grid grid-cols-1 p-12 text-white sm:grid-cols-3 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        <h3 className="m-1 p-2 block text-2xl bg-slate-700 rounded-lg font-bold">Popular Movies</h3>
        {popular?.results?.slice(0, populerMovieLimit).map((item, i) => (
          <PopularCard loading={loading} value={item} key={i} />
        ))}
      </div>
    </div>
  )
}

export default PopularMovies