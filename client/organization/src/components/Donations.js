import React from "react";
import { DonationsWrapper } from "./Donations.styled";
import Header from "./Header";

const Donations = () => {
  return (
    <DonationsWrapper>
      <div style={{ backgroundColor: "black" }}>
        <Header />
      </div>
    </DonationsWrapper>
  );
};

export default Donations;
