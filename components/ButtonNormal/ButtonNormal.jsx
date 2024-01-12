import React from 'react';

const ButtonNormal = ({text,href}) => {
    return(
        
        <a className="text-sm font-semibold p-2 text-gray-900 cursor-pointer" href={href}>
            {text}
        </a>
    )
}

export default ButtonNormal