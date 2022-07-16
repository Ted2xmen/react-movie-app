import { Routes, Route } from 'react-router-dom'
import AboutPage from './pages/AboutPage';
import DetailsPage from './pages/DetailsPage';
import HomePage from './pages/HomePage';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/details/:id" element={<DetailsPage />} />
        <Route path="about" element={<AboutPage />} />
      </Routes>
    </div>
  )
}

export default App
