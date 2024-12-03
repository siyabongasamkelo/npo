import React from "react";
import { PayButtonDiv, PayButtonWrapper } from "./PayButton.styled";
import Header from "./Header";
import { useContext } from "react";
import { PayButtonContext } from "../context/PayButtonContext";

const PayButton = () => {
  const { payButton } = useContext(PayButtonContext);

  return (
    <PayButtonWrapper>
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
      <PayButtonDiv>
        <p>
          If you click this button below you will be redirected to payfast page
          to finish payment...
        </p>
        <div dangerouslySetInnerHTML={{ __html: payButton }}></div>
      </PayButtonDiv>
    </PayButtonWrapper>
  );
};

export default PayButton;
