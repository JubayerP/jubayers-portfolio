import React from 'react';
import Banner from '../Banner/Banner';
import Contact from '../Contact/Contact';
import Experiences from '../Experiences/Experiences';
import Technologies from '../Technologies/Technologies';

const Home = () => {
    return (
        <div>
            <Banner />
            <Technologies />
            <Experiences />
            <Contact />
        </div>
    );
};

export default Home;