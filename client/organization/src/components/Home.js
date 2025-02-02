import React from "react";
import { HeroSection, HomeCover } from "./Home.styled";
// import background from "../assets/img/background.jpg";
import Header from "./Header";
import { Button } from "./common/Button.styled";
import { Facebook, Whatsapp, Instagram, Twitter } from "react-bootstrap-icons";
import { Container } from "react-bootstrap";
import { HashLink } from "react-router-hash-link";
import background from "../assets/img/org.jpg";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <HomeCover backgroundImage={background}>
      <Container>
        <Header />
        <HeroSection>
          <h1>
            Sitinonke <br></br>Together We Work
          </h1>
          <p>
            we strive to bring back the lost hope to all the kids <br></br>in
            our <span>community</span>...
          </p>
          <HashLink to="/#contactUs">
            <Button>Contact Us</Button>
          </HashLink>
          <div>
            <Link to={"https://www.facebook.com/profile.php?id=61561702177958"}>
              <Facebook />
            </Link>
            <Whatsapp />
            <Link to="https://www.instagram.com/ssitinonkefoundation23/?utm_source=qr&igsh=MzNlNGNkZWQ4Mg%3D%3D">
              <Instagram />
            </Link>
            <Twitter />
          </div>
        </HeroSection>
      </Container>
    </HomeCover>
  );
};

export default Home;
