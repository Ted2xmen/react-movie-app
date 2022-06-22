import React from 'react'
import { useSelector } from 'react-redux'

const UpComingMovies = () => {

  const value = useSelector((state) => state.moviesReducer.upcomingmovies)
  return (
    <div>
      <div className="text-md gradient p-12 text-white">
         {/* {value.results.slice(0,4).map((item, i) => (
          <li key={i}> {item.original_title} </li>
        ))}    */}
      </div>
    </div>
  )
}

export default UpComingMovies