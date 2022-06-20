import Nav from '../pages/Nav'
import Header from './Header'

const AppContainer = () => {
  return (
    <div className="mx-auto items-center justify-center pt-24 sm:h-full sm:w-full md:h-full md:w-full lg:mx-12 xl:mx-24">
      <Nav />
      <Header />
    </div>
  )
}

export default AppContainer
