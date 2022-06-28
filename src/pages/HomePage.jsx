import AppContainer from '../components/AppContainer'
import { Helmet } from 'react-helmet'
import MovieList from '../components/MovieList'
const HomePage = () => {
  return (
    <div className="mx-auto items-center justify-center">
      <Helmet>
        <title>Home</title>
      </Helmet>
      <AppContainer />
      <MovieList />
    </div>
  )
}

export default HomePage
