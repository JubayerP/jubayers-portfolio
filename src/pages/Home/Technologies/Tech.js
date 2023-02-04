import React from 'react';

const Tech = ({tech}) => {
    return (
        <div className='py-2'>
            <img className='w-28' src={tech.pic} alt="tech" />
        </div>
    );
};

export default Tech;