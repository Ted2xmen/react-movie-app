import AppContainer from '../components/AppContainer'
import { Helmet } from 'react-helmet'

const HomePage = () => {
  return (
    <div className="mx-auto items-center justify-center">
      <Helmet>
        <title>Home</title>
      </Helmet>
      <AppContainer />
    </div>
  )
}

export default HomePage
