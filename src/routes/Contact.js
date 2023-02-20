import React from 'react';
import Navbar from '../componenets/Navbar';

import Footer from '../componenets/footer'
import HeroImg2 from '../componenets/HeroImg2';
import Form from "../componenets/Form";



const Contact = () => {
  return (
    <div>
     <Navbar/>
     <HeroImg2 heading="CONTACT" text="Lets have a chat "/>
      <Form/>
      <div className='footerup'>
        <p>For connectivity follow me on below mentioned profiles*</p>
      </div>
      <Footer/>
    </div>
   
  );
};

export default Contact;
