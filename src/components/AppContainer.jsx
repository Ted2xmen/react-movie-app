import { useEffect, useState } from 'react'
import Nav from '../pages/Nav'
import UpComingMovies from './containers/UpComingMovies'
import PopularMovies from './containers/PopularMovies'
import Trending from '../components/containers/Trending'
import PopularPersons from './containers/PopularPersons'
import MovieApi, { apiKey } from '../features/apis/MovieApi'

const AppContainer = () => {
  const [loading, setLoading] = useState(true)
  const [trendingmovie, setTrendingmovie] = useState([])

  useEffect(() => {
    const fetchTrendingMovie = async () => {
      const response = await MovieApi.get(
        `trending/movie/week?api_key=${apiKey}`
      )
      setTrendingmovie(response.data)
    }

    fetchTrendingMovie()
    setLoading(false)
  }, [])

  return (
    <div className="mx-auto items-center justify-center pt-24 sm:h-full sm:w-full md:h-full md:w-full lg:mx-12 xl:mx-24 ">
      <Nav />
      <div className="xs:space-y-4 m-8 py-6 px-4 grid grid-cols-1 items-center justify-center sm:grid-cols-1 bg-slate-900 rounded-xl md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-3">
        <Trending 
          loading={loading}
          title="Trending Movie's"
          trending={trendingmovie}
        />
        {/* <PopularPersons title="People's" loading={loading} /> */}
        <PopularPersons title="People's" loading={loading} />
        <iframe
          className="mt-12 ml-4 rounded-lg opacity-50 hover:opacity-100"
          width="560"
          height="315"
          src="https://www.youtube.com/embed/n9xhJrPXop4"
          title="Trailer's"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen></iframe>
      </div>
      <PopularMovies loading={loading} />
      <UpComingMovies loading={loading} />
    </div>
  )
}

export default AppContainer
