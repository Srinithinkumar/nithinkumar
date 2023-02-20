import "./footerStyles.css";
import React from "react";


import {FaFacebook,FaLinkedin, FaHome, FaInstagram, FaMailBulk, FaPhone, FaTwitter, FaGithub} from "react-icons/fa";

const footer = () => {
  return (
    <div className="Footer">
      <div className="Footer-container">
        <div className="left">
            <div  className="location">
                <FaHome size={20} style={{color : "#fff", marginRight:"2rem"}}/>
            </div>
            <div>
              <p>Subhashnagar,Karimnagar.</p>
              <p>Telangana.</p>
            </div>
            <div className="phone">
        <h4><FaPhone size={20} style={{color : "#fff", marginRight:"2rem"}}/>
        6302640884</h4>
        </div>
        <div className="email">
        <h4><FaMailBulk size={20} style={{color : "#fff", marginRight:"2rem"}}/>
        srinithin.gudipelly@gmail.com</h4>
        </div>
        </div>
        
       
        <div className="right">
          <h4>Social Gallery</h4>
          <p>Shared very close experiences of mine pursuing hobbies and interests.Found connections on following profiles</p>
          <div className="social">
            
          <a href="https://www.facebook.com/your-page-url">
  <FaFacebook size={30} style={{color:"#fff",marginRight:"1rem"}} />
            </a>
          <a href="https://twitter.com/srinithinkumar"><FaTwitter size={30} style={{color:"#fff",marginRight:"1rem"}}/></a>
          <a href="https://www.linkedin.com/in/gudipelly-srinithin-/"><FaLinkedin size={30} style={{color:"#fff",marginRight:"1rem"}}/></a>
          <a href="https://www.instagram.com/mr.nithin_kumar"><FaInstagram size={30} style={{color:"#fff",marginRight:"1rem"}}/></a>
          <a href="https://github.com/Srinithinkumar"><FaGithub size={30} style={{color:"#fff",marginRight:"1rem"}}/></a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default footer;
