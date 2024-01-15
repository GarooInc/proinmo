import React from 'react'

const ContactItem = ({name, number, mail}) => {
  return (
    <div className="glassmorphism lg:w-1/4 m-2">
        <div className="flex flex-col items-center justify-center">
                <div className="flex flex-col items-center justify-between gap-4">
                    <h1 className="font-inter text-xl lg:text-2xl font-bold text-center mt-4 mb-2">{name}</h1>
                    <a href={`tel:${number}`} className="cursor-pointer font-inter rounded-md bg-kaqui p-2 px-6 lg:px-8 text-sm font-semibold text-white shadow-sm hover:bg-dark-grayish flex-end" >{number}</a>
                    <a href={`mailto:${mail}`} className="cursor-pointer font-inter rounded-md bg-kaqui p-2 px-6 lg:px-8 text-sm font-semibold text-white shadow-sm hover:bg-dark-grayish flex-end" >{mail}</a>
                </div>
        </div>
    </div>
  )
}

export default ContactItem