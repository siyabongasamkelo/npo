import React from "react";
import { Home2Div, Home2Wrapper } from "./Home2.styled";
import { Container } from "react-bootstrap";
import Header from "./Header";
import aboutpic from "../assets/img/aboutpic.jpg";

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
              <img src={aboutpic} alt="kids" />
            </div>
            <div className="row2">
              <img src={aboutpic} alt="kids" className="pic1" />
              <img src={aboutpic} alt="kids" className="pic2" />
            </div>
            <div className="row3">
              <img src={aboutpic} alt="kids" />
            </div>
            <div className="row4">
              <img src={aboutpic} alt="kids" className="pic1" />
              <img src={aboutpic} alt="kids" className="pic2" />
            </div>
            <div className="row5">
              <img src={aboutpic} alt="kids" />
            </div>
          </div>
        </Home2Div>
      </Container>
    </Home2Wrapper>
  );
};

export default Home2;
