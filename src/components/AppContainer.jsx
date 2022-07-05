import { useEffect, useState } from 'react'
import Nav from '../pages/Nav'
import UpComingMovies from './containers/UpComingMovies'
import PopularMovies from './containers/PopularMovies'
import Trending from '../components/containers/Trending'
import PopularPersons from './containers/PopularPersons'
import MovieApi, { apiKey } from '../features/apis/MovieApi'

const AppContainer = () => {
  const [loading, setLoading] = useState(true)
  const [trendingmovie, setTrendingmovie] = useState([]) // change later to trending
  const [type, setType] = useState()

  useEffect(() => {
    const fetchTrendingMovie = async () => {
      const response = await MovieApi.get(
        `trending/${type || 'all'}/week?api_key=${apiKey}`
      )
      setTrendingmovie(response.data)
    }

    fetchTrendingMovie()
    setLoading(false)
  }, [type])

  return (
    <div className="mx-auto items-center justify-center pt-24 sm:h-full sm:w-full md:h-full md:w-full lg:mx-12 xl:mx-24 ">
      <Nav />
      <div className="xs:space-y-4 m-8 grid grid-cols-1 items-center justify-center rounded-xl bg-slate-900 py-6 px-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-2">
        <Trending
          setType={setType} // all, movie, person, tv
          loading={loading}
          title="Trendings"
          trending={trendingmovie}
        />
        <PopularPersons title="People's and Movie's" loading={loading} />
      </div>
      <PopularMovies loading={loading} />
      <UpComingMovies loading={loading} />
    </div>
  )
}

export default AppContainer
