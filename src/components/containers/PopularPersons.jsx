import React from 'react'
import { useEffect, useState } from 'react'
import PersonCard from '../cards/PersonCard'
import MovieApi, { apiKey } from '../../features/apis/MovieApi'

const PopularPersons = ({ loading, title }) => {
  const [popularpersons, setPopularPersons] = useState([])

  useEffect(() => {
    const fetchPopularPersons = async () => {
      const response = await MovieApi.get(`person/popular/?api_key=${apiKey}`)
      setPopularPersons(response.data)
    }
    fetchPopularPersons()
  }, [])

  return (
    <div className="mx-4 space-y-2">
      <h3 className="text-white m-1 rounded-lg text-2xl font-bold">
        {title}
      </h3>

      <div className="grid h-96 grid-cols-1 overflow-auto overflow-x-hidden sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-2">
        {popularpersons?.results?.slice(1, 18).map((item) => (
          <PersonCard key={item.id} loading={loading} value={item} />
        ))}
      </div>
    </div>
  )
}

export default PopularPersons
