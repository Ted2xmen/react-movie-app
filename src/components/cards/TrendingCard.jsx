import React from 'react'
import { useNavigate } from 'react-router-dom'

const TrendingCard = ({value}) => {
      const imageRoot = 'https://image.tmdb.org/t/p/original'
      const navigate = useNavigate()

  return (
    <div className="m-1">
      <div
        className="flex cursor-pointer rounded-lg bg-slate-900 p-1 shadow-sm transition-all hover:bg-slate-700"
        onClick={() => navigate(`/details/${value.id}`)}>
        <img
          className="h-42 w-24 rounded-lg object-cover  "
          src={imageRoot + value.poster_path}
          alt=""
        />
        <div className=" p-2">
          <h5 className="text-md font-bold text-white">
            {value.name || value.original_title}.
          </h5>
          <div className="mt-3">
            <span className="text-xs text-gray-400 ">
              {' '}
              {value.overview.slice(0, 100)}{' '}
            </span>
            <span className="block py-3 text-xs text-red-500">
              🗓️ {value.first_air_date || value.release_date}
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TrendingCard