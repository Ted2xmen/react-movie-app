import Nav from '../pages/Nav'
import { useEffect, useState } from 'react'
import MovieApi from '../features/apis/MovieApi'
import UpComingMovies from './UpComingMovies'
import PopularMovies from './PopularMovies'
import Trending from './Trending'
import PopularPersons from './PopularPersons'


const AppContainer = () => {
  const [loading, setLoading] = useState(true)
  const [popular, setPopular] = useState([])
  const [upcoming, setUpcoming] = useState([])
  const [trendingtv, setTrendingtv] = useState([])
  const [popularpersons, setPopularPersons] = useState([])
  const [trendingmovie, setTrendingmovie] = useState([])

  const apiKey = process.env.REACT_APP_MOVIE

  useEffect(() => {
    const fetchUpComing = async () => {
      const response = await MovieApi.get(`movie/now_playing?api_key=${apiKey}`)
      setUpcoming(response.data)
    }
    const fetchTrending = async () => {
      const response = await MovieApi.get(`trending/tv/week?api_key=${apiKey}`)
      setTrendingtv(response.data)
    }

    const fetchTrendingMovie = async () => {
      const response = await MovieApi.get(
        `trending/movie/week?api_key=${apiKey}`
      )
      setTrendingmovie(response.data)
    }
    const fetchPopularPersons = async () => {
      const response = await MovieApi.get(`person/popular/?api_key=${apiKey}`)
      setPopularPersons(response.data)
    }
    const fetchPopular = async () => {
      const response = await MovieApi.get(
        `movie/popular?api_key=${apiKey}&page=1`
      )
      setPopular(response.data)
    }
    fetchTrendingMovie()
    fetchUpComing()
    fetchPopularPersons()
    fetchTrending()
    fetchPopular()
    setLoading(false)
    // setTimeout(() => {
    //       setLoading(false)
    //     }, 1000);

  }, [apiKey])

  return (
    <div className="mx-auto items-center justify-center pt-24 sm:h-full sm:w-full md:h-full md:w-full lg:mx-12 xl:mx-24 ">
      <Nav />
      {/* <div className="flex justify-between">
        <Trending
          loading={loading}
          title="Trending TV Show"
          trending={trendingtv}
        />
        <Trending
          loading={loading}
          title="Trending Movies"
          trending={trendingmovie}
        />
      </div> */}
      <PopularPersons loading={loading} popularpersons={popularpersons} />
      <PopularMovies loading={loading} popular={popular} />
      <UpComingMovies loading={loading} upcoming={upcoming} />
    </div>
  )
}

export default AppContainer
