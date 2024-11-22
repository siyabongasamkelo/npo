import styled from "styled-components";

export const DonationFormWrapper = styled.form`
  height: 600px;
  width: 25%;
  margin-top: 5%;
  border-radius: 30px;
  background-color: #ffb0b0;
  font-family: "Afacad Flux", sans-serif;

  display: flex;
  flex-direction: column;
  align-items: center;

  p {
    font-size: 28px;
    color: rgba(255, 255, 255, 1);
  }

  label {
    /* color: rgba(0, 0, 0, 0.8); */
    color: rgba(255, 255, 255, 0.9);
    margin-left: -60%;
    margin-top: 5%;
  }

  input {
    height: 10px;
    width: 75%;
    border: none;
    border-radius: 50px;
    margin-top: 2%;
    padding: 20px;
  }

  button {
    margin-top: 10%;
    color: rgba(0, 0, 0, 0.6);
  }
`;
