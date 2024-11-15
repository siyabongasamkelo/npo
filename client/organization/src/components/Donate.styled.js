import styled from "styled-components";

export const DonateCover = styled.section`
  height: 35vh;
  width: 100%;
  background-color: #343131;
  margin-top: 80px;
`;

export const DonateWrapper = styled.div`
  font-family: "Afacad Flux", sans-serif;
  color: #fff7d1;
  @media only screen and (min-width: 992px) {
    width: 80%;
    margin-left: 10%;
    h1 {
      font-size: 84px;
      padding-top: 30px;
    }
    p {
      margin-top: -5%;
    }

    input {
      height: 35px;
      width: 20%;
      padding-left: 20px;
      border: none;
      border-radius: 30px;
    }

    button {
      background-color: #ffb0b0;
      color: rgba(255, 255, 255, 0.9);
      margin-top: 20px;
    }
  }

  @media only screen and (max-width: 600px) {
    width: 100%;
    input {
      width: 70%;
      height: 35px;
      border: none;
      border-radius: 30px;
    }
  }
`;
