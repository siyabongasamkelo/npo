import React from "react";
import { CopyrightDiv, FooterWrapper, Links } from "./Footer.styled";
import { Link } from "react-router-dom";
import { Facebook, Instagram, TwitterX, Whatsapp } from "react-bootstrap-icons";

const Footer = () => {
  return (
    <FooterWrapper>
      <Links>
        <Link to="/">Home</Link>
        <Link to="/">About Us</Link>
        <Link to="/">Our Mission</Link>
        <Link to="/">Contact us</Link>
        <div>
          <p>
            <Facebook />
            <Instagram />
            <TwitterX />
            <Whatsapp />
          </p>
        </div>
      </Links>
      <CopyrightDiv>
        <p>
          copyright&copy; {new Date().getFullYear()} All rights reserved
          Sitinonke
        </p>
      </CopyrightDiv>
    </FooterWrapper>
  );
};

export default Footer;
