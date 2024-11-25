import styled from "styled-components";

export const DonationFormWrapper = styled.form`
  height: 65%;
  width: 30%;
  border-radius: 30px;
  background-color: #ffb0b0;
  font-family: "Afacad Flux", sans-serif;
  margin-top: 5%;

  display: flex;
  flex-direction: column;
  align-items: center;

  div {
    width: 85%;
  }

  p {
    font-size: 28px;
    color: rgba(255, 255, 255, 1);
    margin-top: 8%;
  }

  label {
    color: rgba(255, 255, 255, 0.9);
    margin-top: 5%;
    margin-left: 5%;
  }

  .error {
    color: red;
    margin-top: -2%;
    font-size: 14px;
    margin-left: 5%;
  }

  input {
    height: 10px;
    width: 100%;
    border: none;
    border-radius: 50px;
    margin-top: 2%;
    padding: 20px;
  }

  button {
    margin-top: 10%;
    color: rgba(0, 0, 0, 0.6);
  }

  @media only screen and (max-width: 600px) {
    width: 100%;
    height: 65%;
  }
  @media only screen and (min-width: 768px) {
    width: 75%;
    height: 75%;

    input {
      height: 60px;
      font-size: 18px;
    }

    label {
      font-size: 22px;
    }
  }
  @media only screen and (min-width: 992px) {
    width: 30%;
    height: 60%;
    input {
      height: 40px;
      font-size: 18px;
    }

    label {
      font-size: 18px;
    }
  }
`;
