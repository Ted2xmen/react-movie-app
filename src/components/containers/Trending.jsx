import React from 'react'
import TrendingCard from '../cards/TrendingCard'
// import Slider from 'react-slick'
// import 'slick-carousel/slick/slick.css'
// import 'slick-carousel/slick/slick-theme.css'

const Trending = ({ trending, title, setType }) => {
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

  const handleType = (e) => {
    setType(e.target.value)
  }
  const mediaType = ['all', 'tv', 'movie', 'person']

  return (
    <div className="mx-5 space-y-2">
      <h3 className="m-1 flex justify-between rounded-lg text-2xl font-bold text-white">
        {title}
        <select
          className="my-2 ml-2 rounded-md bg-red-800 p-1 font-mono text-sm uppercase tracking-wide"
          onChange={handleType}>
          {mediaType.map((item, i) => {
            return <option key={i}>{item}</option>
          })}
        </select>
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
