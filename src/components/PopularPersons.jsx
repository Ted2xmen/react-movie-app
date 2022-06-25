import React from 'react'

const PopularPersons = ({ popularpersons }) => {
      const imageRoot = 'https://image.tmdb.org/t/p/original'


  return (
    <div className='border-2 border-black inline-block p-1 rounded-lg'>

      <div>
        <img
          className="h-40 object-contain"
          src={imageRoot + popularpersons?.results?.[3].profile_path}
          alt=""
        />
      </div>
      <h3> {popularpersons?.results?.[3].name} </h3>
    </div>
  )
}

export default PopularPersons