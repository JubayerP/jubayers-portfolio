import { motion } from 'framer-motion';
import React from 'react';
import fr from '../../../assets/fr-dev.png';
import js from '../../../assets/js-icon.png';
import react from '../../../assets/react-icon.png';
import ExpCard from './ExpCard';

const Experiences = () => {

    const experience = [
        {
            id: 1,
            name: 'Front end developer',
            icon: fr
        },
        {
            id: 2,
            name: 'JavaScript developer',
            icon: js
        },
        {
            id: 3,
            name: 'React JS developer',
            icon: react
        }
    ]

    const cardVariants = {
        offscreen: {
            y: 0,
            x: -100,
        },
        onscreen: {
            y: 0,
            x: 0,
            transition: {
                type: "spring",
                bounce: 0,
                duration: 1
            }
        }
    };


    return (
        <div className='bg-secondary md:h-screen h-auto flex md:flex-row flex-col justify-between items-center px-6 py-10'>
            <motion.div
                className='hidden md:block'
                // initial={{x: -100}}
                initial="offscreen"
                whileInView="onscreen"
                variants={cardVariants}
                viewport={{ once: true, amount: 0.8}}
            >
                <h1 className='text-7xl font-spaceGotesk font-semibold text-base leading-[150%]'><span className='text-primary text-7xl font-poppins block text-center'>1+</span> Years Working <span className='opacity-80'>Experience</span></h1>
            </motion.div>
            <div>
                <h1 className='md:text-5xl text-3xl text-center font-poppins font-bold text-base md:leading-[180%] mb-5'>
                    Developer, specialized in
                    UI/UX and Web Developer
                </h1>

                <div className='grid md:grid-cols-3 gap-10 items-end'>
                    {
                        experience.map(exp => <ExpCard key={exp.id} exp={exp} />)
                    }
                </div>
            </div>
        </div>
    );
};

export default Experiences;