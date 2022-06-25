import Nav from '../pages/Nav'
import { useEffect, useState } from 'react'
import MovieApi from '../features/apis/MovieApi'
import UpComingMovies from './UpComingMovies'
import PopularMovies from './PopularMovies'
import TrendingTV from './TrendingTV'
import PopularPersons from './PopularPersons'

const AppContainer = () => {
  const [popular, setPopular] = useState([])
  const [upcoming, setUpcoming] = useState([])
  const [trendingtv, setTrendingtv] = useState([])
  const [popularpersons, setPopularPersons] = useState([])
  const apiKey = process.env.REACT_APP_MOVIE

  useEffect(() => {
    const fetchUpComing = async () => {
      const response = await MovieApi.get(
        `movie/now_playing?api_key=${apiKey}`
      )
      setUpcoming(response.data)
    }
      const fetchTrending = async () => {
        const response = await MovieApi.get(
          `trending/tv/week?api_key=${apiKey}`
        )
        setTrendingtv(response.data)
      }
       const fetchPopularPersons = async () => {
         const response = await MovieApi.get(
           `person/popular/?api_key=${apiKey}`
         )
         setPopularPersons(response.data)
         console.log(response.data)
       }
    const fetchNowPlaying = async () => {
      const response = await MovieApi.get(
        `movie/popular?api_key=${apiKey}&page=1`
      )
      setPopular(response.data)
    }
    fetchUpComing()
    fetchPopularPersons()
    fetchTrending()
    fetchNowPlaying()
  }, [apiKey])

  return (
    <div className="mx-auto items-center justify-center pt-24 sm:h-full sm:w-full md:h-full md:w-full lg:mx-12 xl:mx-24">
      <Nav />
      {/* <TrendingTV trendingtv={trendingtv} /> */}
      <TrendingTV trendingtv={trendingtv} />
      <PopularPersons popularpersons={popularpersons} />
      <PopularMovies popular={popular} />
      <UpComingMovies upcoming={upcoming} />
    </div>
  )
}

export default AppContainer
