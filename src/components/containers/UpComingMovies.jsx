import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { useEffect, useState } from 'react'
import MovieApi, { apiKey } from '../../features/apis/MovieApi'
import UpComingCard from '../cards/UpcomingCard'

const UpComingMovies = ({ loading }) => {
  const [upcoming, setUpcoming] = useState([])

  useEffect(() => {
    const fetchUpComing = async () => {
      const response = await MovieApi.get(`movie/now_playing?api_key=${apiKey}`)
      setUpcoming(response.data)
    }
    fetchUpComing()
  }, [])

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  }
  return (
    <div>
      <div className="text-md items-center justify-center p-12">
        <span className="m-2 rounded-lg bg-slate-400  bg-opacity-30 p-2 text-2xl font-bold text-white shadow-sm shadow-red-600 transition">
          Upcoming Movies
        </span>
        <div className="py-3">
          <Slider {...settings}>
            {upcoming?.results?.map((item) => (
              <UpComingCard loading={loading} key={item.id} value={item} />
            ))}
          </Slider>
        </div>
      </div>
    </div>
  )
}

export default UpComingMovies
