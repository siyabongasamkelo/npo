import React from "react";
import Home from "../components/Home";
import AboutUs from "../components/AboutUs";
import { Container } from "react-bootstrap";

const HomePage = () => {
  return (
    <div>
      <Home />
      <Container>
        <AboutUs />
      </Container>
    </div>
  );
};

export default HomePage;
