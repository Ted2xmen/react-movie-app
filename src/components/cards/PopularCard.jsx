import React from 'react'
import { useNavigate } from 'react-router-dom'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

const PopularCard = ({ value, loading }) => {
  
  const { id, original_title, poster_path } = value
  const imageRoot = 'https://image.tmdb.org/t/p/original'
  const navigate = useNavigate()


  const popularSkeleton = (
    <div className="m-1">
      <div className="flex rounded-lg bg-slate-500 bg-opacity-20  shadow-sm backdrop-blur-lg">
        <Skeleton
          className="m-2"
          height={100}
          width={60}
          containerClassName="avatar-skeleton"
        />
        <div className=" p-2">
          <h5 className="text-sm font-bold">
            <p>
              <Skeleton width={140} />
              <Skeleton width={100} />
            </p>
          </h5>
          <div className="mt-3">
            <span className="text-xs">
              <Skeleton width={50} />
            </span>
          </div>
          <button onClick={() => navigate(`/details/${value.id}`)}>
            <Skeleton width={70} />
          </button>
        </div>
      </div>
    </div>
  )

  return (
    <>
      {loading ? (
        popularSkeleton
      ) : (
        <div className="m-1">
          <div className="flex rounded-lg bg-slate-400 bg-opacity-20 shadow-sm backdrop-blur-lg">
            <img
              className="h-42 w-24 object-cover transition hover:scale-150 hover:rounded-lg "
              src={imageRoot + poster_path}
              alt={original_title}
            />
            <div className=" p-2">
              <h5 className="text-sm font-bold">{original_title}</h5>
              <div className="mt-3">
                <span className="text-xs">🗓️ {value.release_date} </span>
              </div>
              <button
                onClick={() => navigate(`/details/${value.id}`)}
                className="m-2 bg-red-700 p-1 text-xs">
                read more {id}{' '}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default PopularCard
