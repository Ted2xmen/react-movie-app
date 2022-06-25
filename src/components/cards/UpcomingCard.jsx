import React from 'react'
import moment from 'moment'

const UpComingCard = ({ value }) => {
  const imageRoot = 'https://image.tmdb.org/t/p/original'

  return (
    <div className="m-2 h-full space-x-4 space-y-3 overflow-hidden rounded-lg border-2 border-gray-600 bg-slate-300">
      <img
        className="h-full w-full object-contain"
        src={imageRoot + value.poster_path}
        alt={value.original_title}
      />

      <div className="mt-3 h-full">
        <h5 className="truncate text-sm font-bold ">{value.original_title}.</h5>
        <span className="text-lg">
          {moment(value.release_date).endOf('day').fromNow()}
        </span>
        <div className="flex">
          Watch {value.vote_average > 7 ? <div> 🔥</div> : <div> 😓</div>}
        </div>
      </div>
    </div>
  )
}

export default UpComingCard
