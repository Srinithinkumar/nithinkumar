import "./FormStyles.css";
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const notify=()=>toast("submitted successfully!", {
  position: "top-right",
  autoClose: 1000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
  theme: "dark",
  });
function ContactForm() {
  const form = useRef();
  
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_bbjogof', 'template_kaxp7on', form.current, 'y_V-aurCe1mnMTO5m')
      .then((result) => {
          console.log(result.text);
          e.target.reset();
         
          console.log("message sent");
          
      }, (error) => {
          console.log(error.text);
      });
    }

  return (
    <form ref={form} onSubmit={sendEmail}>
      <label>Your Name</label>
      <input type="text" name="user_name" placeholder="Name" />
      <label> Your Email</label>
      <input type="email" name="user_email" placeholder="123@gmail.com"/>
      <label>Message</label>
      <textarea name="message" placeholder="Suggestion/Rating/Message" />
      
      <input type="submit" value="Send : srinithin.gudipelly@gmail.com" onClick={notify} />
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
    
    </form>
  );
}

export default ContactForm;



