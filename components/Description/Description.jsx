import React from 'react'

const Description = ({text, color}) => {
  return (
    <span className="font-montserrat text-lg lg:text-xl lg:w-4/5 z-10 text-center" style={{color: color}}>{text}</span>
  )
}

export default Description