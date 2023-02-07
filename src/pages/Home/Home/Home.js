import React from 'react';
import Banner from '../Banner/Banner';
import Contact from '../Contact/Contact';
import Experiences from '../Experiences/Experiences';
import Projects from '../Projects/Projects';
import Technologies from '../Technologies/Technologies';


const Home = () => {
    return (
        <div>
            <Banner />
            <Technologies />
            <Experiences />
            <Projects />
            <Contact />
        </div>
    );
};

export default Home;