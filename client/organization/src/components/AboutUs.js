import React from "react";
import {
  About,
  AboutDiv,
  AboutPic,
  AboutText,
  AboutUsCover,
  OurTeam,
  OurTeamDiv,
} from "./AboutUs.styled";
import aboutpic from "../assets/img/aboutpic.jpg";
import TeamCard from "./common/TeamCard";
const AboutUs = () => {
  return (
    <AboutUsCover id="aboutUs">
      <AboutDiv>
        <h2>About Us</h2>
        <About>
          <AboutPic>
            <img src={aboutpic} alt="aboutpic" />
          </AboutPic>
          <AboutText>
            <p>
              As a non-profit organization located in Nquthu, our primary goal
              is to foster the growth of young children into responsible,
              successful adults. We are dedicated to providing free daily meals
              to these children, enabling them to focus on their education and
              personal development. Additionally, we support young girls in
              local schools by donating sanitary pads and offering motivational
              guidance to help them achieve their full potential.
              <br></br>
              <br></br>
              Our commitment to making a positive impact in rural areas drives
              us to strive for a better future for all children. With our base
              in Kwazulu Natal, Nquthu, we are proud to be a non-profit
              organization actively making a tangible difference in the lives of
              young individuals. Our documented efforts and impactful work stand
              as a testament to our dedication and passion for this cause.
            </p>
          </AboutText>
        </About>
      </AboutDiv>
      <OurTeamDiv id="ourTeam">
        <h2>Our Team</h2>
        <OurTeam>
          <TeamCard></TeamCard>
          <TeamCard></TeamCard>
          <TeamCard></TeamCard>
        </OurTeam>
      </OurTeamDiv>
    </AboutUsCover>
  );
};

export default AboutUs;
