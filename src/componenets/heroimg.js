import "./heroimgStyles.css";

import React from 'react';
import { Link } from "react-router-dom";
import introImg from "../assets/img1.jpg" ;
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



 const notify=()=>toast("Downloaded successfully", {
  position: "top-right",
  autoClose: 1000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
  theme: "dark",
  });
function heroimg() {
  
  return (

    <div className="hero">

      <div className="mask">
        <img className="intro-img" src={introImg} alt="introImg" />
      </div>

      <div className="content">
        <p>"Hi, I'm Gudipelly Srinithin Kumar, a passion driven engineer following iteration on personal and professional development"</p>
        <h1>Developer Portfolio</h1>
       
        <div>
          <Link to="/project"
            className="btn">projects</Link>
          <Link to="/contact"
            className="btn-light">contact</Link>
          <a href="nithin.pdf" download="nithin.pdf">
            <button className="btn" onClick={notify}>Resume</button>
            <ToastContainer
                
                autoClose={1000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="dark"
            />
          </a>
        </div>
      </div>
    </div>

  );


}


export default heroimg;
