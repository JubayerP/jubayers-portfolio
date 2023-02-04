import React, { useState } from 'react';
import { HiMenuAlt4 } from 'react-icons/hi';
import { RiCloseFill } from 'react-icons/ri';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [open, setOpen] = useState(false)
    return (
        <div className='max-w-7xl container mx-auto flex flex-wrap w-full justify-between items-center h-16'>
            <div className='md:ml-0 ml-5'><Link to='/' className='font-roboto'>LOGO</Link></div>
            <div onClick={() => setOpen(!open)} className='md:hidden flex mr-5 cursor-pointer'>
                {open ? <RiCloseFill className='text-2xl' />
                    :
                    <HiMenuAlt4 className='text-2xl' />}
            </div>
            <div className={`md:space-x-10 hidden  md:flex text-lg font-normal font-poppins w-full md:items-center md:w-auto`}>
                <Link to='/'>Home</Link>
                <Link to='/about'>About</Link>
                <Link to='/services'>Services</Link>
            </div>
            <div className='md:flex hidden'>
                <button className='bg-primary text-base text-sm font-normal font-poppins px-3 py-2 rounded'>Contact us</button>
            </div>
        </div>
    );
};

export default Navbar;  