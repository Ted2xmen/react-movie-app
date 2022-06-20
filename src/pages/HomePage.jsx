import AppContainer from '../components/AppContainer'
import MovieList from '../components/MovieList'
import UpComingMovies from '../components/UpComingMovies'
const HomePage = () => {
  return (
    <div className='mx-auto justify-center items-center'>
      <AppContainer />
      <UpComingMovies />
      <MovieList />
    </div>
  )
}

export default HomePage
