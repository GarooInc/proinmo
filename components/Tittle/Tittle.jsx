import React from 'react';

const Tittle = ({ title, center, color }) => {
    return (
        <h1 className={`text-3xl font-bold tracking-tight sm:text-4xl font-inter text-center ${center ? 'md:text-center' : 'md:text-start'}`} style={{ color: color }}>
            {title}
        </h1>
    )
}

export default Tittle;
