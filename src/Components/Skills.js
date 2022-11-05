import React from "react";
import "./Skills.css";
import { LinearProgress } from "@mui/material";
import { Element } from "react-scroll/modules";
const Skills = () => {
  return (
    <Element className="skill__content" name="skill">
      <h1 className="skill__title">Skills</h1>
      <div className=" skill__progress">
        <div className="skill__1">
          <h1> C PROGRAMMING</h1>
          <div className="skill1__progress">
            <LinearProgress
              variant="determinate"
              value={40}
              color="secondary"
            />
          </div>
        </div>
        <div className="skill__2">
          <h1> REACT JS</h1>
          <div className="skill2__progress">
            <LinearProgress variant="determinate" value={70} color="inherit" />
          </div>
        </div>
        <div className="skill__3">
          <h1> JAVA</h1>
          <div className="skill3__progress">
            <LinearProgress variant="determinate" value={30} color="success" />
          </div>
        </div>
        <div className="skill__4">
          <h1> CSS</h1>
          <div className="skill4__progress">
            <LinearProgress variant="determinate" value={50} />
          </div>
        </div>
        <div className="skill__5">
          <h1> PYTHON</h1>
          <div className="skill5__progress">
            <LinearProgress variant="determinate" value={20} />
          </div>
        </div>
      </div>
    </Element>
  );
};
export default Skills;
