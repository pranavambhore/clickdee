import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const TileComponent = ({ icon, title, text, index }) => {
    const isEven = index % 2 === 0;
    const backgroundColor = isEven ? 'bg-sky-50' : 'bg-white';
    return (
        <div className={`grid group cursor-pointer h-96 w-96 p-16 ${backgroundColor} transition-all transform hover:shadow-2xl hover:-translate-y-2 hover:bg-white hover:z-40 ease-in duration-300 `}
        >
            <div><FontAwesomeIcon icon={icon} size="4x" /></div>
            <div className="text-4xl text-indigo-950 my-6">{title}</div>
            <div className="opacity-0 group-hover:opacity-100 ease-in duration-300">
                {text}
            </div>
        </div>
    );
};

export default TileComponent;
