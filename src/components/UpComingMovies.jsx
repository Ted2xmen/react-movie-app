import React from 'react'
import { upcomingMovieLimit } from '../features/AppSettings'
import UpComingCard from './cards/UpcomingCard'


const UpComingMovies = ({ upcoming }) => {

  return (
    <div>
      <div className="text-md flex p-12 text-black">
        {upcoming?.results?.slice(0, upcomingMovieLimit).map((item, i) => (
            <UpComingCard value={item} key={i}  />
        ))}
      </div>
    </div>
  )
}

export default UpComingMovies
