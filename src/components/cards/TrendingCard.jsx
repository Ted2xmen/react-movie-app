import React from 'react'

const TrendingCard = ({value}) => {
      const imageRoot = 'https://image.tmdb.org/t/p/original'

  return (
    <div className="m-1">
      <div className="flex rounded-lg p-1 bg-slate-900 transition-all hover:bg-slate-700 shadow-sm">
        <img
          className="h-42 w-24 object-cover rounded-lg  "
          src={imageRoot + value.poster_path}
          alt=""
        />
        <div className=" p-2">
          <h5 className="text-md text-white font-bold">
            {value.name || value.original_title}.
          </h5>
          <div className="mt-3">
            <span className="text-xs text-gray-400 "> {value.overview.slice(0, 100)} </span>
            <span className="block py-3 text-red-500 text-xs">
              🗓️ {value.first_air_date || value.release_date}
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TrendingCard