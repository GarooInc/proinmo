"use client";
import React, { useRef, useState } from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'

// import required modules
import { Pagination } from 'swiper/modules';

const SwiperSlides = ({imgProyects}) => {
    return(
        <Swiper
        pagination={{
          dynamicBullets: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        {
            imgProyects.map((item) => (
                <SwiperSlide key={item.id} className='w-full'>
                    <img src={item.img} alt={item.name} className='w-full h-[400px] lg:h-[600px] object-cover'/>
                </SwiperSlide>
            ))
        }


      </Swiper>
    )
}

export default SwiperSlides;