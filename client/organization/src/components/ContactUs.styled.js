import styled from "styled-components";

export const ContactUsCover = styled.section`
  h2 {
    font-size: 32px;
    text-align: center;
    font-family: "Kaushan Script", cursive;
  }
`;

export const ContactUsWrapper = styled.div`
  margin-top: 5%;
  @media only screen and (min-width: 992px) {
    display: flex;
  }
`;

export const ContactDetails = styled.div`
  font-family: "Afacad Flux", sans-serif;

  @media only screen and (max-width: 600px) {
    width: 80%;
    margin-left: 10%;
    svg {
      padding: 0;
      padding-left: 10px;
      margin-right: 20px;
      transform: scale(250%);
    }
  }

  @media only screen and (min-width: 768px) {
    width: 80%;
    margin-left: 10%;
    margin-top: 8%;
    svg {
      padding: 0;
      padding-left: 10px;
      margin-right: 20px;
      transform: scale(250%);
    }
    p {
      font-size: 22px;
    }
  }

  @media only screen and (min-width: 992px) {
    height: 20vh;
    width: 30%;
    margin-left: 0;
    margin-top: 0%;

    p {
      font-size: 18px;
    }
    svg {
      padding-left: 10px;
      margin-right: 20px;
      cursor: pointer;
      transform: scale(200%);
      &:hover {
        color: #ffb0b0;
        transition: 0.5s ease-in-out;
      }
    }
  }
`;

export const ContactFormCover = styled.div`
  width: 30%;
  @media only screen and (max-width: 600px) {
    width: 100%;
  }
  @media only screen and (min-width: 768px) {
    width: 80%;
  }
  @media only screen and (min-width: 992px) {
    width: 40%;
  }
`;
