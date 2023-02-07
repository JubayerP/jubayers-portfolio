import { useQuery } from '@tanstack/react-query';
import React from 'react';
import ProjectCard from './ProjectCard';

const Projects = () => {
    const { data: projects = [] } = useQuery({
        queryKey: ["projects"],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/projects');
            const data = await res.json();
            return data;
        }
    })
    return (
        <div className='md:h-screen h-full p-6'>
            <h1 className='lg:text-7xl md:text-5xl text-4xl font-spaceGotesk font-semibold text-secondary leading-[150%] my-4'>Proje<span className='opacity-95'>cts</span></h1>
            <div className='grid md:grid-cols-3 grid-cols-1 gap-10 items-center mx-auto place-items-center'>
                {
                    projects.map(project => <ProjectCard key={project._id} project={project} />)
                }
            </div>
        </div>
    );
};



export default Projects;