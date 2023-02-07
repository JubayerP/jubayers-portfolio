import React from 'react';
import './ProjectCard.css';

const ProjectCard = ({project}) => {
    return (
        <div className='rounded-xl shadow-xl lg:max-w-lg md:max-w-md sm:max-w-sm max-w-xs w-full'>
            <div className="window">
                <img src={project.img} alt="project" />
            </div>

            <div className='px-6 py-4'>
                <h3 className='text-3xl font-bold text-left my-4 font-poppins'>{project.name}</h3>
                <button className='px-2 py-2.5 bg-secondary text-base font-poppins rounded mr-3'><a href={project.source} target="_blank" rel="noreferrer">Source</a></button>
                <button className='px-2 py-2.5 bg-secondary text-base font-poppins rounded'><a href={project.preview} target="_blank" rel="noreferrer">Preview</a></button>
            </div>
        </div>
    );
};

export default ProjectCard;