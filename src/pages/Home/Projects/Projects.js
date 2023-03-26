import { useQuery } from '@tanstack/react-query';
import React from 'react';
import ProjectCard from './ProjectCard';

const Projects = () => {
    const { data: projects = [] } = useQuery({
        queryKey: ["projects"],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/projects');
            const data = await res.json();
            return data.data;
        }
    })
    return (
        <div className='md:h-screen h-full p-6 bg-[url("https://i.ibb.co/gg2x0GF/project-gradient.png")] bg-no-repeat bg-cover'>
            <h1 className='lg:text-7xl md:text-5xl text-4xl font-spaceGotesk font-semibold text-secondary leading-[150%] my-4'>Proje<span className='opacity-95'>cts</span></h1>
            <div className='grid md:grid-cols-3 grid-cols-1 gap-10 items-center mx-auto place-items-center'>
                {
                    projects.map(project => <ProjectCard key={project._id} project={project} />)
                }
            </div>
            <div className="text-center my-8">
                <button className='px-2 py-2.5 bg-secondary text-base font-poppins rounded mr-3'>More Projects</button>
            </div>
        </div>
    );
};



export default Projects;