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
              <SwiperSlide key={item.id} className='w-full relative'>
              <img src={item.img} alt={item.name} className='w-full h-[300px] lg:h-[600px] object-cover'/>
              ({item.quote && <span className='lg:text-2xl text-xl rounded-md text-grayish absolute bottom-[125px] lg:bottom-[300px] left-[100px] p-4 lg:left-[350px] flex justify-center items-center w-1/2 text-center font-bold text-inter bg-white'>{item.quote}</span>})
          </SwiperSlide>
            ))
        }


      </Swiper>
    )
}

export default SwiperSlides;