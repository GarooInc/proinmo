import React from 'react'

const Description = ({text, color}) => {
  return (
    <p className="font-montserrat text-lg lg:text-xl z-10 text-center w-3/4" style={{color: color}}>
      {text}
    </p>
  )
}

export default Description