import React from "react";
import Home from "../components/Home";
import AboutUs from "../components/AboutUs";
import { Container } from "react-bootstrap";
import ContactUs from "../components/ContactUs";
import Donate from "../components/Donate";
import Footer from "../components/common/Footer";
import PreviousProjects from "../components/PreviousProjects";

const HomePage = () => {
  return (
    <div>
      <Home />
      <Container>
        <AboutUs />
        <PreviousProjects />
        <ContactUs />
        <Donate />
        <Footer />
      </Container>
    </div>
  );
};

export default HomePage;
