import { AnimatePresence, motion } from 'framer-motion';
import React from 'react';
import { AiOutlineMail } from 'react-icons/ai';
import { FiDownload } from 'react-icons/fi';

const Banner = () => {
    return (
        <AnimatePresence>
            <motion.div
                className='flex md:flex-row flex-col lg:h-screen w-full mt-[-64px]'
            >
                <div className='md:w-1/2 bg-secondary flex items-center md:py-20 py-20'>
                    <div className='px-6'>
                        <motion.h1
                            initial={{ x: -100, opacity: 0 }}
                            animate={{ x: 0, opacity: 1, }}
                            transition={{ delay: .5, duration: .4 }}
                            className='lg:text-7xl md:text-6xl sm:text-5xl text-5xl font-bold font-poppins leading-[120%] text-base overflow-visible'>
                            Hello!
                            I’m <br /> <span className='text-primary'>Jubayer Hossain</span>
                        </motion.h1>

                        <motion.p
                            initial={{ x: -100, opacity: 0 }}
                            animate={{ x: 0, opacity: 1, }}
                            transition={{ delay: 0.7, duration: .3 }}
                            className='font-roboto font-medium md:text-base text-sm text-base leading-[180%] mt-5'
                        >
                            I’am <span className=''>fontend web developer</span> based in Bangladesh who loves to craft attractive functionality experiences for the websites.
                        </motion.p>

                        <motion.div
                            initial={{ x: -100, opacity: 0 }}
                            animate={{ x: 0, opacity: 1, }}
                            transition={{ delay: 0.6, duration: .6 }}
                            className='md:space-x-6 mt-10 md:flex items-center'
                        >
                            <button className='text-base font-roboto bg-primary py-3 px-4 rounded hover:bg-primary hover:bg-opacity-90 flex items-center space-x-2 md:w-auto w-full my-6 md:my-0'><FiDownload /> <span>Download Resume</span></button>
                            <a href="mailto:jubayerhossain4992@gmail.com" className='text-base font-poppins border py-3 px-4 rounded cursor-pointer flex items-center space-x-2'><AiOutlineMail /> <span>Email me</span></a>
                        </motion.div>
                    </div>
                </div>
                <div
                    className='md:w-1/2'
                >
                    <img className='w-full h-full object-cover' src="https://i.ibb.co/FHW2zbv/Rectangle-3.png" alt="banner" />
                </div>
            </motion.div>
        </AnimatePresence>
    );
};

export default Banner;