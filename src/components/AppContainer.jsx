import Nav from '../pages/Nav'
import Header from './Header'
import { useEffect, useState } from 'react'
import MovieApi from '../features/apis/MovieApi'
import { data } from 'autoprefixer'

const AppContainer = () => {

  const [data, setData] = useState([])
  const apiKey = process.env.REACT_APP_MOVIE
  const imageRoot = 'https://image.tmdb.org/t/p/original'


  useEffect(() => {
    const fetchMovies = async () => {
      const response = await MovieApi.get(
        `movie/upcoming?api_key=${apiKey}&page=1`
      )
      setData(response.data)
      console.log(response.data)
    }
    fetchMovies();
  }, [apiKey])

  return (
    <div className="mx-auto items-center justify-center pt-24 sm:h-full sm:w-full md:h-full md:w-full lg:mx-12 xl:mx-24">
      <Nav />
      <Header />
      {/* {data.map((item) => (
        <img src={imageRoot + item.file_path} alt="" />
      ))} */}
    </div>
  )
}

export default AppContainer
