import React from "react";
import { ActionDiv, Home2Div, Home2Wrapper } from "./Home2.styled";
import { Container } from "react-bootstrap";
import Header from "./Header";
import { Button } from "./common/Button.styled";
import { Facebook, Instagram, TwitterX, Whatsapp } from "react-bootstrap-icons";
import { HashLink } from "react-router-hash-link";
import { Link } from "react-router-dom";

import aboutpic from "../assets/img/org2.jpg";
import pic1 from "../assets/img/org4.jpg";
import pic2 from "../assets/img/org5.jpg";
import pic3 from "../assets/img/org6.jpg";
import pic4 from "../assets/img/org7.jpg";
import pic5 from "../assets/img/org8.jpg";

const Home2 = () => {
  return (
    <Home2Wrapper>
      <Container>
        <Header />
        <Home2Div>
          <div className="col1">
            <h1>Bringing Back The Lost Hope</h1>
          </div>
          <div className="col2">
            <div className="row1">
              <img src={pic1} alt="kids" />
            </div>
            <div className="row2">
              <img src={pic4} alt="kids" className="pic1" />
              <img src={pic5} alt="kids" className="pic2" />
            </div>
            <div className="row3">
              <img src={aboutpic} alt="kids" />
            </div>
            <div className="row4">
              <img src={pic2} alt="kids" className="pic1" />
              <img src={pic3} alt="kids" className="pic2" />
            </div>
            <div className="row5">
              <img src={pic2} alt="kids" />
            </div>
          </div>
        </Home2Div>
        <ActionDiv>
          <div className="para">
            <p>
              Helping disadvantaged kids<br></br> in rural areas is our number
              <br></br>
              one priority...
            </p>
          </div>
          <div>
            <HashLink to="/#contactUs">
              <Button>Donate Now</Button>
            </HashLink>
          </div>
          <div>
            <p className="social-media-icons">
              <Link
                to={"https://www.facebook.com/profile.php?id=61561702177958"}
              >
                <Facebook />
              </Link>
              <Instagram />
              <TwitterX />
              <Whatsapp />
            </p>
          </div>
        </ActionDiv>
      </Container>
    </Home2Wrapper>
  );
};

export default Home2;
