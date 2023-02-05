import { motion } from 'framer-motion';
import React from 'react';

const ExpCard = ({ exp }) => {
    const { name, icon } = exp;
    const cardVariants = {
        offscreen: {
            x: 0,
            rotate: -10
        },
        onscreen: {
            x: 0,
            rotate: 0,
            transition: {
                type: "spring",
                bounce: 0.4,
                duration: 0.8
            },
        }
    };
    return (
        <motion.div
            className='bg-accent px-10 py-8 hover:bg-primary duration-200 md:shadow-none shadow-xl'
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.8 }}
            variants={cardVariants}
        >
            <img className='ml-3' src={icon} alt="icon" />
            <h3 className="text-2xl font-semibold font-poppins text-center leading-[120%] text-secondary mt-3 hover:text-[#fff] duration-200">{name}</h3>
        </motion.div>
    );
};

export default ExpCard;