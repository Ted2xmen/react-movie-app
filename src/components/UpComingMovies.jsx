import React from 'react'
import { upcomingMovieLimit } from '../features/AppSettings'
import UpComingCard from './cards/UpcomingCard'

import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

const UpComingMovies = ({ upcoming }) => {
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
      <div className="text-md items-center justify-center p-12 text-black">
        <h3 className="m-2 text-2xl font-bold">Upcoming Movies</h3>
        <Slider {...settings}>
          {upcoming?.results?.map((item, i) => (
            <UpComingCard key={item.id} value={item} />
          ))}
        </Slider>
      </div>
    </div>
  )
}

export default UpComingMovies
