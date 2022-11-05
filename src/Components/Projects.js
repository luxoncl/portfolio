import React from "react";
import "./Projects.css";
import { Element } from "react-scroll/modules";

const Projects = () => {
  return (
    <Element className="project__content" name="project">
      <h1> Projects</h1>
      <div className=" projects">
        <div className="project1">
          <h1> Google Keep</h1>
          <p> An web to keep in the notes prepared.</p>
        </div>
        <div className="project2">
          <h1> Weather App</h1>
          <p> An accurate weather predicting forecasting app.</p>
        </div>
        <div className="project3">
          <h1> Parking App</h1>
          <p>
            An web app to get in the details of driver and car number and to
            count in the cars int the garage.
          </p>
        </div>
        <div className="project4">
          <h1> To-Do List</h1>
          <p> A To-do list to remind the list of upcoming activities.</p>
        </div>
      </div>
    </Element>
  );
};
export default Projects;
