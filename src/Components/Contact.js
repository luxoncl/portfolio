import React from "react";
import "./Contact.css";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import TelegramIcon from "@mui/icons-material/Telegram";
import { Element } from "react-scroll/modules";

const Contact = () => {
  return (
    <Element className="Contact__content" name="contact">
      <div className=" contact">
        <h1> Contact</h1>
        <a a href=" https://github.com/luxoncl">
          <button className="git">
            <GitHubIcon />
          </button>
        </a>
        <a href=" lhttps://www.linkedin.com/in/luxoncl018/">
          <button className=" linkedin">
            <LinkedInIcon />
          </button>
        </a>
        <a href=" https://www.instagram.com/luxon_018/">
          <button className=" insta">
            <InstagramIcon />
          </button>
        </a>
        <a href=" https://www.instagram.com/luxon_018/">
          <button className="telegram">
            <TelegramIcon />
          </button>
        </a>
      </div>
    </Element>
  );
};
export default Contact;
