import React from 'react'
import Nav from './Nav'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import MovieApi from '../features/apis/MovieApi'
import { Helmet } from 'react-helmet'

const DetailsPage = () => {
  const [detail, setDetail] = useState({})
  const apiKey = process.env.REACT_APP_MOVIE
  const imageRoot = 'https://image.tmdb.org/t/p/original'

  const { id } = useParams()

  useEffect(() => {
    const fetchDetails = async () => {
      const response = await MovieApi.get(`movie/${id}?api_key=${apiKey}`)
      setDetail(response.data)
    }
    fetchDetails()
  }, [apiKey, id])

  return (
    <div className="pb-24">
      <Helmet>
        <title>{detail.original_title}</title>
      </Helmet>
      <div
        className="h-screen w-full bg-cover bg-top opacity-30 "
        style={{
          backgroundImage: `url(${imageRoot + detail.backdrop_path})`,
        }}></div>
      <Nav />

      <div className="mx-auto  px-12">
        <h3 className="py-4 text-center text-5xl font-bold text-white">
          {' '}
          {detail.original_title}{' '}
          <span className="mx-3 items-start rounded-lg bg-red-600  p-1 text-lg text-white">
            {detail.vote_average}
          </span>
        </h3>
        <div className="mx-auto flex justify-center space-x-6  ">
          {detail?.genres?.map((genre) => {
            return (
              <p
                className="cursor-pointer rounded-lg bg-red-900 p-1 text-white backdrop-blur-md"
                key={genre.id}>
                {genre.name || ''}
              </p>
            )
          })}
        </div>
        <div className="flex flex-col justify-center space-x-2 space-y-2 pt-12">
          <img
            src={imageRoot + detail.poster_path}
            className="h-64 rounded-lg object-contain"
            alt={detail.original_title}
          />
          <p className="text-lg text-white">{detail.overview}</p>
        </div>
      </div>
    </div>
  )
}

export default DetailsPage
