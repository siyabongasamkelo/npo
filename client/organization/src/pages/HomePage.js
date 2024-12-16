import React from "react";
import Home from "../components/Home";
import AboutUs from "../components/AboutUs";
import { Container } from "react-bootstrap";
import ContactUs from "../components/ContactUs";
import Donate from "../components/Donate";
import Footer from "../components/common/Footer";

const HomePage = () => {
  return (
    <div>
      <Home />
      <Container>
        <AboutUs />
        <ContactUs />
        <Donate />
        <Footer />
      </Container>
    </div>
  );
};

export default HomePage;
