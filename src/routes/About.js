import React from 'react';
import Navbar from '../componenets/Navbar';
import './about.css';
import Footer from '../componenets/footer';
import HeroImg2 from '../componenets/HeroImg2';
import  { useState, useEffect } from 'react';
import Counter from '../componenets/Counter';

const About = () => {
  return (
    <div>
      <Navbar/>
      <HeroImg2 heading="ABOUT" text="Passion and Perseverance" />
      
      <div class="text-animation">Hello!,Iam G.Srinithin Kumar persuing computer science and engineering also specialization in MachineLearning & Artificial Intelligence</div>

      <div className='hr'>
         <h2>SKILLSET</h2>
      </div>
      
      <div className="App">
      <CircularProgress percentage={50} text="c++"/>
    
    </div>
    <div className="App">
      <CircularProgress percentage={70} text="Python"/>
      
    </div>
    <div className="App">
      <CircularProgress percentage={80} text="c" />
      
    </div>
    <div className="App">
      <CircularProgress percentage={80} text="java"/>
      
    </div>
    <div className='hr'><h2>ALSO KNOW</h2></div>
    <div class="logos-container">
  <img src="react-logo.svg" alt="React logo"/>
  <img src="css-logo.svg" alt="CSS logo"/>
  <img src="javascript-logo.png" alt="JavaScript logo"/>
  <img src="html-logo.svg" alt="HTML logo"/>
</div>
    <div className='other'>
      <h2>AS A ATTENDEE</h2>
      <div className="mine">
      <Counter target={20} duration={4000}/>
    </div>
      <div className='para'>
        Team Works.
      </div>
      <div className="mine">
      <Counter target={30} duration={4000}/>
    </div>
      <div className='para'>
        Group Discussions and Presentations.
      </div>
      <div className="mine">
      <Counter target={3} duration={4000}/>
    </div>
      <div className='para'>
        Team Lead.
      </div>
      <div className="mine">
      <Counter target={5} duration={4000} />
    </div>
      <div className='para'>
        Sports Meets.
      </div>
    </div>
       
      <Footer/>
    </div>
  );
};
function CircularProgress(props) {
  const { size, strokeWidth, percentage, fontSize, fontColor, trackColor, progressColor, text } = props;

  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const progressOffset = ((100 - percentage) / 100) * Math.PI * (size - strokeWidth);
    setOffset(progressOffset);
  }, [setOffset, size, strokeWidth, percentage]);

  const textOffset = size / 2 - fontSize;
  return (
    <svg className="circular-progress" width={size} height={size}>
      <circle className="circular-progress__track" cx={size / 2} cy={size / 2} r={(size - strokeWidth) / 2} strokeWidth={strokeWidth} stroke={trackColor} fill="none" />
      <circle className="circular-progress__progress" cx={size / 2} cy={size / 2} r={(size - strokeWidth) / 2} strokeWidth={strokeWidth} stroke={progressColor} strokeDasharray={`${Math.PI * (size - strokeWidth)} ${Math.PI * (size - strokeWidth)}`} strokeDashoffset={offset} strokeLinecap="round" fill="none" />
      <text className="circular-progress__percent" x="50%" y={textOffset} dominantBaseline="middle" textAnchor="middle" fontSize={fontSize} fill={fontColor}>
        {percentage}%
      </text>
      {text && (
        <text className="circular-progress__text" x="50%" y={textOffset + fontSize + 5} dominantBaseline="middle" textAnchor="middle" fontSize={fontSize} fill={fontColor}>
          {text}
        </text>
      )}
    </svg>
  );
}
CircularProgress.defaultProps = {
  size: 150,
  strokeWidth: 10,
  percentage: 0,
  fontSize: 20,
  fontColor: '#fff',
  trackColor: '#333',
  progressColor: '#f0f0f0',
  
};


export default About;
// Change this to the current value of your progress bar



