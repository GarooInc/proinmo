import React from 'react'
import { FaPhoneAlt } from "react-icons/fa";
import { IoMdMailOpen } from "react-icons/io";


const ContactItem = ({name, number, mail, img}) => {
  return (
    <div className="lg:w-1/3 w-full mt-4  shadow-lg py-8 px-12 border-b-4 border-kaqui">
        <div className="flex flex-col items-center justify-center">
                <div className="flex flex-col items-center justify-between gap-4">
                    <div className='flex flex-row items-center justify-between w-full gap-4'>
                      <img className="w-14 h-14 rounded-full object-cover" src={img} alt="contacto"/>
                      <h1 className="font-montserrat text-xl lg:text-2xl font-bold text-center mt-4 mb-2">{name}</h1>
                    </div>
                    <div className="w-full flex flex-row items-start justify-start ">
                        <FaPhoneAlt className="text-kaqui" />
                        <a href={`tel:${number}`} className=" cursor-pointer font-inter rounded-md px-4 lg:px-8 text-sm font-semibold text-grayish" >{number}</a>
                    </div>
                    <div className="w-full flex flex-row items-start justify-start">
                        <IoMdMailOpen className="text-kaqui" />
                        <a href={`mailto:${mail}`} className=" cursor-pointer font-inter rounded-md px-4 lg:px-8 text-sm font-semibold text-grayish" >{mail}</a>
                    </div>
                </div>
        </div>
    </div>
  )
}

export default ContactItem