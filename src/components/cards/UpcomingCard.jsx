import React from 'react'
import { useNavigate } from 'react-router-dom'
import moment from 'moment'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

const UpComingCard = ({ value, loading }) => {
  const imageRoot = 'https://image.tmdb.org/t/p/original'

  const navigate = useNavigate()

  const upcomingSkeleton = (
    <div className="m-2 h-full space-x-4 space-y-3 overflow-hidden rounded-lg border-2 border-gray-600 bg-slate-300">
      <Skeleton
        className="m-2"
        height={280}
        width={195}
        containerClassName="avatar-skeleton"
      />

      <div className="mt-3 h-full">
        <h5 className="truncate text-sm font-bold ">
          <Skeleton width={140} />
        </h5>
        <span className="rounded-lg p-1 text-sm">
          <Skeleton width={100} />
        </span>
        <div className="flex">
          <Skeleton count={1} />
        </div>
      </div>
    </div>
  )

  return (
    <>
      {loading ? (
        upcomingSkeleton
      ) : (
        <div className="m-4 h-full space-x-4 space-y-3 overflow-hidden rounded-lg bg-slate-400 bg-opacity-40 p-2 backdrop-blur-lg">
          <img
            onClick={() => navigate(`/details/${value.id}`)}
            className="h-full w-full cursor-pointer rounded-lg object-contain shadow-md brightness-50 hover:brightness-100"
            src={imageRoot + value.poster_path}
            alt={value.original_title}
          />

          <div className="mt-3 h-full">
            <h5 className="truncate text-sm font-bold text-white ">
              {value.original_title}
            </h5>

            <div className="my-4 flex items-center justify-start space-x-3">
              <span className="rounded-md bg-red-700 px-1 text-sm text-white">
                {value.vote_average}
              </span>
              <span className="rounded-lg text-xs  text-gray-300">
                {moment(value.release_date).endOf('day').fromNow()}
              </span>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default UpComingCard
