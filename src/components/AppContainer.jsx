import Nav from '../pages/Nav'
import Header from './Header'
import { useEffect } from 'react'
import MovieApi from '../features/apis/MovieApi'
import { useDispatch } from 'react-redux'
import {
  addMovie,
  upComingMovies,
  populerMovies,
} from '../redux/movies/movieSlice'
import UpComingMovies from './UpComingMovies'
import PopularMovies from './PopularMovies'


const AppContainer = () => {
       

  const apiKey = process.env.REACT_APP_MOVIE
  const imageRoot = 'https://image.tmdb.org/t/p/original'

    const dispatch = useDispatch()

  useEffect(() => {
    const fetchMovies = async () => {
      const response = await MovieApi.get(
        `movie/upcoming?api_key=${apiKey}&page=1`
      )
      dispatch(upComingMovies(response.data))
    }
    const fetchNowPlaying = async () => {
      const response = await MovieApi.get(
        `movie/popular?api_key=${apiKey}&page=1`
      )
      dispatch(populerMovies(response.data))
      console.log(response.data)
    }
    fetchMovies()
    fetchNowPlaying()
  }, [apiKey, dispatch])

  return (
    <div className="mx-auto items-center justify-center pt-24 sm:h-full sm:w-full md:h-full md:w-full lg:mx-12 xl:mx-24">
      <Nav />
      <Header />
      <UpComingMovies />
      <PopularMovies />

      {/* {data.map((item) => (
        <img src={imageRoot + item.file_path} alt="" />
      ))} */}
    </div>
  )
}

export default AppContainer
