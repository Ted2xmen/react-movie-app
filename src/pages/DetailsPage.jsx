import React from 'react'
import Nav from './Nav'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import MovieApi from '../features/apis/MovieApi'


const DetailsPage = () => {

  const [detail, setDetail] = useState({})
    const apiKey = process.env.REACT_APP_MOVIE


const { id } = useParams()

useEffect(() => {
const fetchDetails = async () => {
  const response = await MovieApi.get(`movie/${id}?api_key=${apiKey}`)
  setDetail(response.data)
  console.log(response.data)
}
fetchDetails()
}, [apiKey, id])

  return (
    <div className="flex place-content-center">
      <Nav />

      <div className=" place-content-center pt-12">
     <h3> {detail.original_title} </h3> 
      </div>
    </div>
  )
}

export default DetailsPage