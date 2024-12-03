import React from "react";
import { HeroSection, HomeCover } from "./Home.styled";
import background from "../assets/img/background.jpg";
import Header from "./Header";
import { Button } from "./common/Button.styled";
import { Facebook, Whatsapp, Instagram, Twitter } from "react-bootstrap-icons";
import { Container } from "react-bootstrap";
import { HashLink } from "react-router-hash-link";

const Home = () => {
  return (
    <HomeCover backgroundImage={background}>
      <Container>
        <Header />
        <HeroSection>
          <h1>
            Bringing Back The Lost <br></br>Hope{" "}
          </h1>
          <p>
            we strive to bring back lost hope to all the kids <br></br>in our{" "}
            <span>community</span>...
          </p>
          <HashLink to="/#contactUs">
            <Button>Contact Us</Button>
          </HashLink>
          <div>
            <Facebook />
            <Whatsapp />
            <Instagram />
            <Twitter />
          </div>
        </HeroSection>
      </Container>
    </HomeCover>
  );
};

export default Home;
