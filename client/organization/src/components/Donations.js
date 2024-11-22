import React from "react";
import { DonationsCover, DonationsWrapper } from "./Donations.styled";
import Header from "./Header";
import DonationForm from "./DonationForm";

const Donations = () => {
  return (
    <DonationsWrapper>
      <div
        style={{
          backgroundColor: "black",
          padding: "10px",
          borderRadius: "30px",
          marginTop: "2%",
        }}
      >
        <Header />
      </div>
      <DonationsCover>
        <DonationForm></DonationForm>
      </DonationsCover>
    </DonationsWrapper>
  );
};

export default Donations;
