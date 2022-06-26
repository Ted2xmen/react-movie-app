import React from 'react'

const PersonCard = ({ value }) => {
  const imageRoot = 'https://image.tmdb.org/t/p/original'

  return (
    <div className=''>
      <div className="flex rounded-lg hover:bg-slate-700 hover:text-white transition-all shadow-lg p-1">
        <div>
          <img
            className="h-36 rounded-lg object-contain"
            src={imageRoot + value?.profile_path}
            alt=""
          />
        </div>
        <h3 className='m-2'> {value?.name} </h3>

        {/* <h3>known for {value?.results?.known_for.original_title} </h3> */}
      </div>
    </div>
  )
}

export default PersonCard
