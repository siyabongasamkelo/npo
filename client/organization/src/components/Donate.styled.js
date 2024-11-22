import styled from "styled-components";

export const DonateCover = styled.section`
  height: 30vh;
  width: 100%;
  background-color: #343131;
  margin-top: 80px;
`;

export const DonateWrapper = styled.div`
  font-family: "Afacad Flux", sans-serif;
  color: #fff7d1;

  @media only screen and (max-width: 600px) {
    width: 90%;
    margin: 5%;
    input {
      width: 95%;
      height: 35px;
      padding-left: 5%;
      border: none;
      border-radius: 30px;
    }

    button {
      margin-top: 5%;
      width: 100%;
    }
    h1 {
      margin-top: 5%;
    }
  }

  @media only screen and (min-width: 768px) {
    width: 80%;
    margin: 10%;
    input {
      width: 95%;
      height: 50px;
      padding-left: 5%;
      border: none;
      border-radius: 30px;
      font-size: 18px;
    }

    button {
      margin-top: 5%;
      width: 100%;
      height: 50px;
      font-size: 18px;
    }
    p {
      font-size: 20px;
      margin-top: -5%;
    }
    h1 {
      padding-top: 5%;
      font-size: 38px;
    }
  }

  @media only screen and (min-width: 992px) {
    width: 100%;
    margin-left: 10%;
    h1 {
      font-size: 84px;
      padding-top: 30px;
    }
    p {
      margin: 0;
    }

    input {
      height: 50px;
      width: 25%;
      padding-left: 20px;
      border: none;
      border-radius: 30px;
    }

    button {
      background-color: #ffb0b0;
      color: rgba(255, 255, 255, 0.9);
      margin-top: -5%;
      width: 15%;
    }
  }
`;
