import React from "react";
import { Link } from "react-scroll/modules";
import "./Header.css";

function Header() {
  return (
    <div className="header">
      <div className="left__header">
        <h1>
          L<span> cl</span> portfolio
        </h1>
      </div>
      <div className="right__header">
        <Link to="about" smooth={true} duration={500}>
          <h4> About</h4>
        </Link>
        <Link to="skill" smooth={true} duration={500}>
          <h4> Skills</h4>
        </Link>
        <Link to="project" smooth={true} duration={500}>
          <h4> Projects</h4>
        </Link>
        <Link to="contact" smooth={true} duration={500}>
          <h4> Contact</h4>
        </Link>
      </div>
    </div>
  );
}
export default Header;
