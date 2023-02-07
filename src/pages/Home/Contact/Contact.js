import React from 'react';
import { BsArrowLeft } from 'react-icons/bs';
import { RxLinkedinLogo } from 'react-icons/rx';
import { SiFacebook } from 'react-icons/si';
import { VscGithub } from 'react-icons/vsc';

const Contact = () => {

    const socialIcons = [
        {
            icon: <RxLinkedinLogo />,
            link: 'https://www.linkedin.com/in/jubayer1/'
        },
        {
            icon: <VscGithub />,
            link: 'https://github.com/JubayerP/',
        },
        {
            icon: <SiFacebook />,
            link: 'https://www.facebook.com/jubayerz/'
        }
    ]
    return (
        <div className='bg-[#000000] md:h-screen h-auto flex md:flex-row flex-col justify-between items-center px-6 py-10 md:gap-0 gap-10 w-full'>
            <div>
                <h1 className="lg:text-8xl md:text-5xl text-4xl font-bold text-base font-poppins md:leading-[120%]">Let's Connect</h1>
                <div className='md:flex space-x-6 hidden mt-6'>
                    {
                        socialIcons.map((icon, i) => <a href={icon.link} target='_blank' className='text-base text-2xl cursor-pointer' rel="noreferrer" key={i}>{icon.icon}</a>)
                    }
                </div>
            </div>
            <div className='md:w-1/2'>
                <form className='font-poppins grid grid-cols-1 gap-10 lg:max-w-lg md:max-w-md sm:max-w-sm max-w-xs'>
                    <div className='space-y-3'>
                        <label className='text-2xl text-base block' htmlFor="name">Your Name</label>
                        <input className='outline-none pl-2 py-3.5 bg-transparent border border-base text-base rounded w-full' id="name" type="text" />
                    </div>
                    <div className='space-y-3'>
                        <label className='text-2xl text-base block' htmlFor="email">Your Email</label>
                        <input className='outline-none pl-2 py-3.5 bg-transparent border border-base text-base rounded w-full' id="email" type="email" />
                    </div>
                    <div className='space-y-3'>
                        <label className='text-2xl text-base block' htmlFor="desc">Tell about the project</label>
                        <textarea className='outline-none pl-2 py-3.5 bg-transparent border border-base text-base rounded w-full' id="desc" type="text" />
                    </div>
                    <div>
                        <button className='emailSendBtn text-primary flex items-center gap-3 text-xl'>Send <BsArrowLeft className='rotate-180' size={25} /></button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Contact;