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
          <p style={{ display: "flex", alignItems: "center" }}>
            <Link to={"https://www.facebook.com/profile.php?id=61561702177958"}>
              <Facebook />
            </Link>
            <Link to="https://www.instagram.com/ssitinonkefoundation23/?utm_source=qr&igsh=MzNlNGNkZWQ4Mg%3D%3D">
              <Instagram />
            </Link>
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
