import React from 'react';
import Navbar from '../componenets/Navbar';

import Footer from '../componenets/footer';
import HeroImg2 from '../componenets/HeroImg2';
import Work from '../componenets/Work';

const Project = () => {
  return (
    <div>
      <Navbar/>
      <HeroImg2 heading="PROJECTS" text="my works"/>
      <Work/>
      <Footer/>
    </div>
  );
};

export default Project;
