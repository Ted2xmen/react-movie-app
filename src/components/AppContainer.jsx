import Nav from '../pages/Nav'
import { useEffect, useState } from 'react'
import MovieApi from '../features/apis/MovieApi'
import UpComingMovies from './UpComingMovies'
import PopularMovies from './PopularMovies'

const AppContainer = () => {
       
  const [popular, setPopular] = useState([])
  const [upcoming, setUpcoming] = useState([])
  const apiKey = process.env.REACT_APP_MOVIE

  useEffect(() => {
    const fetchUpComing = async () => {
      const response = await MovieApi.get(
        `movie/upcoming?api_key=${apiKey}&page=1`
      )
      setPopular(response.data)
    }
    const fetchNowPlaying = async () => {
      const response = await MovieApi.get(
        `movie/popular?api_key=${apiKey}&page=1`
      )
      setUpcoming(response.data)
    }
    fetchUpComing()
    fetchNowPlaying()
  }, [apiKey])

  return (
    <div className="mx-auto items-center justify-center pt-24 sm:h-full sm:w-full md:h-full md:w-full lg:mx-12 xl:mx-24">
      <Nav />
      <UpComingMovies upcoming={upcoming}  />
      <PopularMovies popular={popular} />
    </div>
  )
}

export default AppContainer
