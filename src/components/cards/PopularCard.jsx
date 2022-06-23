import React from 'react'

const PopularCard = ({value}) => {
      const imageRoot = 'https://image.tmdb.org/t/p/original'

  return (
    <div className="m-2">
      <div
        className="block overflow-hidden rounded-lg border border-gray-100 shadow-sm"
        href="">
        <img
          className="h-56 w-full object-cover"
          src={imageRoot + value.poster_path}
          alt=""
        />

        <div className="p-6">
          <h5 className="text-sm font-bold">{value.original_title}.</h5>
          <div className="mt-3">
            {' '}
            Release Date
            <span className="font-bold"> {value.release_date} </span>
          </div>
          <p className="mt-2 text-sm text-gray-500">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>

          <div className="mt-4 inline-block border-b border-blue-500 pb-1 font-medium text-blue-600 ">
            Find out more
            <span aria-hidden="true">&rarr;</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PopularCard