import React from 'react'
import TrendingCard from '../cards/TrendingCard'
// import Slider from 'react-slick'
// import 'slick-carousel/slick/slick.css'
// import 'slick-carousel/slick/slick-theme.css'

const Trending = ({ trending, title }) => {
  // const settings = {
  //   dots: false,
  //   infinite: true,
  //   slidesToShow: 2,
  //   slidesToScroll: 1,
  //   vertical: true,
  //   arrows: false,
  //   verticalSwiping: true,
  //   autoplay: true,
  //   autoplaySpeed: 2500,
  // }

  return (
    <div className="mx-5 space-y-2">
      <h3 className="m-1 rounded-lg text-2xl font-bold text-white">
        {title} (Weekly)
      </h3>
      <div className="h-80 space-y-3 overflow-auto ">
        {/* <Slider {...settings}> */}
        {trending?.results?.map((item) => (
          <TrendingCard value={item} key={item.id} />
        ))}
        {/* </Slider> */}
      </div>
    </div>
  )
}

export default Trending
