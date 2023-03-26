import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Details = () => {
    const project = useLoaderData();
    console.log(project);
    return (
        <div>
            
        </div>
    );
};

export default Details;