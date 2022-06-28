import { useEffect, useState } from 'react'
import Nav from '../pages/Nav'
import UpComingMovies from './containers/UpComingMovies'
import PopularMovies from './containers/PopularMovies'
 import Trending from '../components/containers/Trending'
import PopularPersons from './containers/PopularPersons'

 import MovieApi, {apiKey} from '../features/apis/MovieApi'

const AppContainer = () => {
  const [loading, setLoading] = useState(true)

 const [trendingtv, setTrendingtv] = useState([])
  const [trendingmovie, setTrendingmovie] = useState([])

  useEffect(() => {
  
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
   
   
  fetchTrendingMovie()
  fetchTrending()
    setLoading(false)

  }, [])

  return (
    <div className="mx-auto items-center justify-center pt-24 sm:h-full sm:w-full md:h-full md:w-full lg:mx-12 xl:mx-24 ">
      <Nav />
      <PopularMovies loading={loading} />
      <UpComingMovies loading={loading} />
      <div className="xs:space-y-4 m-3 grid grid-cols-1 items-center justify-center sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2">
        <Trending
          loading={loading}
          title="Trending Movie's"
          trending={trendingmovie}
        />
        <PopularPersons title="People's" loading={loading} />
      </div>
    </div>
  )
}

export default AppContainer
