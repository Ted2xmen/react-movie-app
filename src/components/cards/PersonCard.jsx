import { Link } from "react-router-dom"


const PersonCard = ({ value }) => {
  const imageRoot = 'https://image.tmdb.org/t/p/original'

  return (
    <div>
      <div className="flex rounded-lg p-1 shadow-lg transition-all hover:bg-slate-800 hover:text-white bg-opacity-20">
        <div>
          <img
            className="h-36 rounded-lg object-contain"
            src={imageRoot + value?.profile_path}
            alt=""
          />
        </div>
        <div className="group">
          <h3 className="m-2 text-lg font-bold text-white  hover:text-red-500">
          {value?.name}
        </h3> 
         <div className="space-y-2"> {value?.known_for.map((item) => {
        return (
          <p
            className="ml-3 truncate text-sm cursor-pointer text-gray-400 hover:text-red-600"
            key={item.id}>
            <Link to={`/details/${item.id}`}>{item.title}</Link>
          </p>
        )
      })} </div>
        </div>
        

    
      </div>
    </div>
  )
}

export default PersonCard
