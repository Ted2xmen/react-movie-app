import React from 'react'
import TrendingCard from './cards/TrendingCard'

import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

const TrendingTV = ({trendingtv}) => {

const settings = {
  dots: false,
  infinite: true,
  slidesToShow: 2,
  slidesToScroll: 1,
  vertical: true,
  arrows: false,
  verticalSwiping: true,
  autoplay: true,
  autoplaySpeed: 2500
}

  return (
    <div className='m-2'>
      <h3 className="m-1 block rounded-lg text-2xl font-bold">
        Trending TV Shows (Weekly)
      </h3>
      <div className='w-1/3 h-1/3'>
        <Slider {...settings}>
          {trendingtv?.results?.map((item, i) => (
            <TrendingCard value={item} key={i} />
          ))}
        </Slider>
      </div>
    </div>
  )
}

export default TrendingTV