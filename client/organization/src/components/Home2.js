import React from "react";
import { Home2Div, Home2Wrapper } from "./Home2.styled";
import { Container } from "react-bootstrap";
import Header from "./Header";
import { Button } from "./common/Button.styled";
import { Facebook, Instagram, TwitterX, Whatsapp } from "react-bootstrap-icons";
import { HashLink } from "react-router-hash-link";
import { Link } from "react-router-dom";

const Home2 = () => {
  return (
    <Home2Wrapper>
      <Container>
        <Header />
        <Home2Div>
          <div className="big-text">
            <h1>
              Sitinonke <br></br>Together We Work
            </h1>
          </div>
          <div className="intro-text">
            <p>
              <span>
                Sitinonke Foundation began with a conversation <br></br> between
                two friends.
              </span>
            </p>

            <p>
              one from a village and the other from a town. Like many meaningful
              conversations, it started in a kitchen.
            </p>
          </div>
          <div className="action">
            <Button>Donate Now</Button>
          </div>
        </Home2Div>
      </Container>
    </Home2Wrapper>
  );
};

export default Home2;
