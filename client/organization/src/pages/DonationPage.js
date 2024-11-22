import React from "react";
import { Container } from "react-bootstrap";
import Donations from "../components/Donations";
import Footer from "../components/common/Footer";

const DonationPage = () => {
  return (
    <div>
      <Container>
        <Donations />
        <Footer />
      </Container>
    </div>
  );
};

export default DonationPage;
