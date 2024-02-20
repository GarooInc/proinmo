import React from 'react'
import { FaPhoneAlt } from "react-icons/fa";
import { IoMdMailOpen } from "react-icons/io";


const ContactItem = ({name, number, mail, img}) => {
  return (
    <div className="lg:w-1/2 w-full mt-4 lg:mx-10  shadow-lg p-4 border-b-4 border-kaqui h-48">
        <div className="flex flex-col items-center justify-center">
                <div className="flex flex-col items-center justify-between gap-4">
                    <div className='flex flex-row items-center justify-between w-full gap-4'>
                      <img className="lg:w-14 lg:h-14 w-12 h-12 rounded-full object-cover" src={img} alt="contacto"/>
                      <h1 className="font-montserrat text-xl lg:text-2xl font-bold text-center mt-4 mb-2">{name}</h1>
                    </div>
                    {
                      number && <div className="w-full flex flex-row items-start justify-start ">
                      <FaPhoneAlt className="text-kaqui" />
                      <a href={`tel:${number}`} className=" cursor-pointer font-inter rounded-md px-4 lg:px-8 text-sm font-semibold text-grayish" >{number}</a>
                    </div>
                    }
                    {
                      mail && <div className="w-full flex flex-row items-start justify-start">
                      <IoMdMailOpen className="text-kaqui" />
                      <a href={`mailto:${mail}`} className=" cursor-pointer font-inter rounded-md px-4 lg:px-8 text-sm font-semibold text-grayish" >{mail}</a>
                  </div>
                    }
                </div>
        </div>
    </div>
  )
}

export default ContactItem