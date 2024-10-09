import React from "react";
import Home from "../components/Home";
import AboutUs from "../components/AboutUs";
import { Container } from "react-bootstrap";
import ContactUs from "../components/ContactUs";

const HomePage = () => {
  return (
    <div>
      <Home />
      <Container>
        <AboutUs />
        <ContactUs />
      </Container>
    </div>
  );
};

export default HomePage;
