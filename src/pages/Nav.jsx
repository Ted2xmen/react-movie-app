import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <div className="ml-6 flex space-x-6 text-2xl text-white">
      <Link to="/">🏠 </Link>
      <Link to="/about"> 📨</Link>
    </div>
  )
}

export default Nav
