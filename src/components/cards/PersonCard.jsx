import { Link } from "react-router-dom"


const PersonCard = ({ value }) => {
  const imageRoot = 'https://image.tmdb.org/t/p/original'

  return (
    <div className="">
      <div className="flex rounded-lg p-1 shadow-lg transition-all hover:bg-slate-700 hover:text-white">
        <div>
          <img
            className="h-36 rounded-lg object-contain"
            src={imageRoot + value?.profile_path}
            alt=""
          />
        </div>
        <div>
          <h3 className="m-2 text-lg font-bold">
          {value?.name}
        </h3> 
         <div className="space-y-2"> {value?.known_for.map((item, i) => {
        return (
          <p className="ml-3 truncate text-xs">
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
