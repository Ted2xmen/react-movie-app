import React from 'react'

const PopularCard = ({ value }) => {
  const imageRoot = 'https://image.tmdb.org/t/p/original'

  return (
    <div className="m-1">
      <div className="flex   rounded-lg border border-gray-100 bg-slate-500 shadow-sm">
        <img
          className="h-42 w-24 object-cover hover:scale-150 transition hover:rounded-lg"
          src={imageRoot + value.poster_path}
          alt=""
        />

        <div className=" p-2">
          <h5 className="text-sm font-bold">{value.original_title}.</h5>
          <div className="mt-3">
            <span className="text-xs">🗓️ {value.release_date} </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PopularCard
