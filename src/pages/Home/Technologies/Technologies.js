import React from "react";
import react from '../../../assets/react-logo.png';
import js from '../../../assets/javascript-logo.png';
import css from '../../../assets/css-logo.png';
import nodejs from '../../../assets/nodejs-logo.png';
import tailwind from '../../../assets/tailwind-logo.png'
import Tech from "./Tech";

const Technologies = () => {
    const technologies = [
        {
            id: 5,
            pic: css
        },
        {
            id: 4,
            pic: tailwind
        },
        {
            id: 2,
            pic: js
        },
        {
            id: 1,
            pic: react
        },
        {
            id: 3,
            pic: nodejs
        },
    ]

    return (
        <div>
            <div className="grid place-items-center grid-cols-5 bg-[#000000]">
                {
                    technologies.map(tech => <Tech key={tech.id} tech={tech} />)
                }
            </div>
        </div>
    )
}

export default Technologies;