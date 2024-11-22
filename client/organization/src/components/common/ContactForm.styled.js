import styled from "styled-components";

export const FormCover = styled.form`
  height: 50vh;
  width: 75%;
  background-color: #ffb0b0;
  border-radius: 30px;
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-left: 20%;

  input {
    height: 10px;
    width: 75%;
    border: none;
    border-radius: 50px;
    margin-top: 10%;
    padding: 20px;
  }

  textarea {
    height: 40%;
    width: 75%;
    border: none;
    border-radius: 20px;
    margin-top: 5%;
    padding: 20px;
  }
  button {
    margin-top: 8%;
  }
  @media only screen and (max-width: 600px) {
    width: 100%;
    margin-left: 0;
  }
  @media only screen and (min-width: 768px) {
    width: 100%;
    margin-left: 0;
    input {
      font-size: 16px;
    }
    textarea {
      font-size: 16px;
    }
  }
  @media only screen and (min-width: 992px) {
    width: 80%;
  }
`;
