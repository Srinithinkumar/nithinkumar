import  "./WorkCardStyles.css"

import React from "react";

import WorkCardData from "./WorkCardData"
import WorkCard from "./WorkCard"
const Work = () => {
  return (
    <div className="work-container">
      <h1 className="project-heading">projects</h1>
      <div className="project-container">
        {WorkCardData.map((val,ind)=>{
            return (
                <WorkCard
                key={ind}
                imgsrc={val.imgsrc}
                title={val.title}
                text={val.text}
                view={val.view}
                />
            )
        })}
      </div>
    </div>
  )
}

export default Work
