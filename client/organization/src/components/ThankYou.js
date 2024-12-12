import React from "react";
import { ThankYouDiv, ThankYouWrapper } from "./ThankYou.styled";
import Header from "./Header";
import Footer from "./common/Footer";

const ThankYou = () => {
  return (
    <ThankYouWrapper>
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
      <ThankYouDiv>
        <p>Thank Your For Your Donation</p>
      </ThankYouDiv>
      <Footer />
    </ThankYouWrapper>
  );
};

export default ThankYou;
