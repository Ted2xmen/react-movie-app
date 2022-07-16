import { Link } from 'react-router-dom'

const PersonCard = ({ value }) => {
  const imageRoot = 'https://image.tmdb.org/t/p/original'

  return (
    <div>
      <div className="flex rounded-lg bg-slate-500 bg-opacity-20 p-1 shadow shadow-red-800 transition-all  hover:bg-slate-700 hover:text-white">
        <div>
          <img
            className="h-28 rounded-lg object-contain"
            src={imageRoot + value?.profile_path}
            alt=""
          />
        </div>
        <div className="group">
          <h3 className="m-2 text-sm font-bold text-white  hover:text-red-500">
            {value?.name}
          </h3>
          <div className="space-y-1">
            {value?.known_for.map((item) => {
              return (
                <p
                  className="ml-3 cursor-pointer text-xs text-gray-400 hover:text-red-600 sm:text-ellipsis"
                  key={item.id}>
                  <Link to={`/details/${item.id}`}>{item.title}</Link>
                </p>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}

export default PersonCard
