import React from 'react'
  // import Swiper styles
  import 'swiper/css'
  import 'swiper/css/navigation'
  import 'swiper/css/lazy'


  import { Lazy, Pagination, Navigation } from 'swiper'
  import { Swiper, SwiperSlide } from 'swiper/react'



const UpComingCard = ({ value }) => {
  const imageRoot = 'https://image.tmdb.org/t/p/original'


  return (
    <>
      <Swiper
        style={{
          '--swiper-navigation-color': '#fff',
          '--swiper-pagination-color': '#fff',
        }}
        lazy={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Lazy, Pagination, Navigation]}
        className="mySwiper">
        <SwiperSlide>
          <img
            data-src="https://swiperjs.com/demos/images/nature-1.jpg"
            className="swiper-lazy" alt=''
          />
          <div className="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
        </SwiperSlide>
        <SwiperSlide>
          <img
            data-src="https://swiperjs.com/demos/images/nature-2.jpg"
            className="swiper-lazy" alt=''
          />
          <div className="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
        </SwiperSlide>
        <SwiperSlide>
          <img
            data-src="https://swiperjs.com/demos/images/nature-3.jpg"
            className="swiper-lazy" alt=''
          />
          <div className="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
        </SwiperSlide>
        <SwiperSlide>
          <img
            data-src="https://swiperjs.com/demos/images/nature-4.jpg"
            className="swiper-lazy" alt=''
          />
          <div className="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
        </SwiperSlide>
        <SwiperSlide>
          <img
            data-src="https://swiperjs.com/demos/images/nature-5.jpg"
            className="swiper-lazy" alt=''
          />
          <div className="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
        </SwiperSlide>
        <SwiperSlide>
          <img
            data-src="https://swiperjs.com/demos/images/nature-6.jpg"
            className="swiper-lazy" alt=''
          />
          <div className="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
        </SwiperSlide>
        <SwiperSlide>
          <img
            data-src="https://swiperjs.com/demos/images/nature-7.jpg"
            className="swiper-lazy" alt=''
          />
          <div className="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
        </SwiperSlide>
        <SwiperSlide>
          <img
            data-src="https://swiperjs.com/demos/images/nature-8.jpg"
            className="swiper-lazy" alt=''
          />
          <div className="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
        </SwiperSlide>
        <SwiperSlide>
          <img
            data-src="https://swiperjs.com/demos/images/nature-9.jpg"
            className="swiper-lazy" alt=''
          />
          <div className="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
        </SwiperSlide>
      </Swiper>
    </>
    // <div className="m-2 flex space-x-4 space-y-3">
    //   <img
    //     className="w-42 h-40 object-cover"
    //     src={imageRoot + value.poster_path}
    //     alt=""
    //   />

    //   <div className="mt-3">
    //     <h5 className="flex text-sm font-bold">{value.original_title}.</h5>
    //     Release Date
    //     <span className="font-bold"> {value.release_date} </span>
    //   </div>
    // </div>
  )
}

export default UpComingCard
