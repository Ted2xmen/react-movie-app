import React, { useState, useEffect } from 'react'
import PopularCard from '../cards/PopularCard'
import { populerMovieLimit } from '../.././features/AppSettings'
import MovieApi, { apiKey } from '../../features/apis/MovieApi'

const PopularMovies = ({ loading }) => {
  const [popular, setPopular] = useState([])

  useEffect(() => {
    const fetchPopular = async () => {
      const response = await MovieApi.get(
        `movie/popular?api_key=${apiKey}&page=1`
      )
      setPopular(response.data)
    }
    fetchPopular()
  }, [])

  return (
    <div>
      <div className="text-md gap-2  grid grid-cols-1 p-12 text-white sm:grid-cols-3 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        <h3 className="m-2 shadow-red-600 shadow-sm flex items-center justify-start rounded-lg bg-slate-400 bg-opacity-30 p-2 text-3xl font-bold backdrop-blur-lg ">
          Popular Movies
        </h3>
        {popular?.results?.slice(0, populerMovieLimit).map((item, i) => (
          <PopularCard loading={loading} value={item} key={i} />
        ))}
      </div>
    </div>
  )
}

export default PopularMovies
