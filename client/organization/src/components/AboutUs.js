import React from "react";
import {
  About,
  AboutDiv,
  AboutPic,
  AboutText,
  AboutUsCover,
} from "./AboutUs.styled";
import aboutpic from "../assets/img/aboutpic.jpg";
const AboutUs = () => {
  return (
    <AboutUsCover>
      <AboutDiv>
        <h2>About Us</h2>
        <About>
          <AboutPic>
            <img src={aboutpic} alt="aboutpic" />
          </AboutPic>
          <AboutText></AboutText>
        </About>
      </AboutDiv>
    </AboutUsCover>
  );
};

export default AboutUs;
