import React from 'react'
import { FaPhoneAlt } from "react-icons/fa";
import { IoMdMailOpen } from "react-icons/io";


const ContactItem = ({name, number, mail}) => {
  return (
    <div className="w-full m-2 rounded-md shadow-lg p-4">
        <div className="flex flex-col items-center justify-center">
                <div className="flex flex-col items-center justify-between gap-4">
                    <h1 className="font-inter text-xl lg:text-2xl font-bold text-center mt-4 mb-2">{name}</h1>
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