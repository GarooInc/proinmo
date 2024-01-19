import React from 'react';
import Link from 'next/link';

const ButtonDark = ({ text, onClick, href }) => {
    const isExternalLink = href?.startsWith('http') || href?.startsWith('//');

    return onClick ? (
        <span
            onClick={onClick}
            className="cursor-pointer z-10 bg-kaqui px-8 py-4 text-white"
        >
            <span className='font-bold text-montserrat'>{text}</span>
        </span>
    ) : isExternalLink ? (
        // Para enlaces externos, usa un elemento <a> directamente
        <a
            href={href}
            className="cursor-pointer z-10 bg-kaqui px-8 py-4 text-white"
            target="_blank" // Abre en una nueva pestaña
            rel="noopener noreferrer" // Previene problemas de seguridad
        >
            <span className='font-bold text-montserrat'>{text}</span>
        </a>
    ) : (
        // Para enlaces internos, utiliza el componente Link de Next.js
        <Link href={href || "#"} className="cursor-pointer z-10 bg-kaqui px-8 py-4 text-white">
                <span className='font-bold text-montserrat'>{text}</span>
        </Link>
    );
};

export default ButtonDark;
