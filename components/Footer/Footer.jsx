import React from 'react'
import Image from 'next/image'
import { FiFacebook, FiYoutube } from "react-icons/fi";


const Footer = () => {
  return (
    <div className="w-full bg-dark-grayish text-white lg:h-40 h-60 flex flex-col justify-center items-center gap-4 py-8">
        <div className="flex lg:flex-row flex-col w-full items-center justify-between px-8 xs:gap-8">
          <div className="flex justify-center items-center">
            <Image
                src="/assets/images/logo.png"
                alt="logo"
                width={100}
                height={100}
                className='object-cover'
            />
            </div>
            <a href="https://garooinc.com/"><span className="font-montserrat text-white text-sm">© 2023 GarooInc</span></a>
            <div className="flex flex-row gap-4">
              <a href="https://www.facebook.com/"><FiFacebook className="text-white text-2xl"/></a>
              <a href="https://www.youtube.com/"><FiYoutube className="text-white text-2xl"/></a>
            </div>
        </div>
    </div>
  )
}

export default Footer