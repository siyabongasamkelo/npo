import React from "react";
import { CopyrightDiv, FooterWrapper, Links } from "./Footer.styled";
import { Link } from "react-router-dom";
import { Facebook, Instagram, TwitterX, Whatsapp } from "react-bootstrap-icons";
import { HashLink } from "react-router-hash-link";

const Footer = () => {
  return (
    <FooterWrapper>
      <Links>
        <Link to="/">Home</Link>
        <HashLink to="/#aboutUs">About Us</HashLink>
        <HashLink to="/#ourTeam">Our Team</HashLink>
        <HashLink to="/#contactUs">Contact us</HashLink>
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
