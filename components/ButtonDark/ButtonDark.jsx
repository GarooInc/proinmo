import React from 'react';


const ButtonDark = ({text, href}) => {
    return(
        <a
            href={href}
                className="rounded-md bg-black p-4 text-sm font-semibold text-white shadow-sm hover:bg-dark-grayish focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-garoo-sky"
        >{text}</a>
    )
}

export default ButtonDark
