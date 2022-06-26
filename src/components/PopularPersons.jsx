import React from 'react'
import PersonCard from './cards/PersonCard'

const PopularPersons = ({ popularpersons }) => {
      const imageRoot = 'https://image.tmdb.org/t/p/original'


  return (
    <div className='mx-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-3 gap-3'>
      {popularpersons?.results?.slice(0,6).map((item, i) => (
        <PersonCard value={item} key={i} />
      ))}
    </div>
  )
}

export default PopularPersons