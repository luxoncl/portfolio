import React from "react";
import "./About.css";
import { Element } from "react-scroll/modules";

export const About = () => {
  return (
    <Element className="about__content" name="about">
      <p>
        I’m curious, and I enjoy work that challenges me to learn something new
        and stretch in a different direction. I do my best to stay on top of
        changes in the state of the art so that I can meet challenges with tools
        well suited to the job at hand. The list of projects I follow on GitHub
        will give you a good idea of the types of tools I’d prefer to be using,
        and my Instapaper “Starred” list will give you a glimpse into the
        reading material I find interesting enough to share.
      </p>
    </Element>
  );
};
export default About;
