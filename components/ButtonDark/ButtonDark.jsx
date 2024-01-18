import React from 'react';


const ButtonDark = ({text, href}) => {
    return(
        <a
            href={href}
                className="cursor-pointer z-10 bg-kaqui px-8 py-4 text-white"
        >
            <span className='font-bold text-montserrat'>{text}</span>
        </a>
    )
}

export default ButtonDark
