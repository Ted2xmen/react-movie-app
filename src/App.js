import { Routes, Route } from 'react-router-dom'
import MovieDetails from './components/MovieDetails';
// Pages
import AboutPage from './pages/AboutPage';
import HomePage from './pages/HomePage';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/movie/:id" element={<MovieDetails />} />
        <Route path="about" element={<AboutPage />} />
      </Routes>
    </div>
  )
}

export default App
