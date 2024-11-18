import styled from "styled-components";

export const ContactUsCover = styled.section`
  h2 {
    font-size: 32px;
    text-align: center;
  }
`;

export const ContactUsWrapper = styled.div`
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
      padding-left: 15px;
    }
  }

  @media only screen and (min-width: 768px) {
    width: 80%;
    margin-left: 10%;
    margin-top: 8%;
    svg {
      padding-left: 15px;
    }
    p {
      font-size: 22px;
    }
  }

  @media only screen and (min-width: 992px) {
    height: 50vh;
    width: 30%;
    margin-left: 0;
    margin-top: 0%;

    p {
      font-size: 18px;
    }
    svg {
      padding-left: 10px;
      cursor: pointer;
      &:hover {
        color: #ffb0b0;
        transition: 0.5s ease-in-out;
      }
    }
  }
`;

export const ContactFormCover = styled.div`
  width: 30%;
  margin-left: 10%;
  @media only screen and (max-width: 600px) {
    width: 80%;
  }
  @media only screen and (min-width: 768px) {
    width: 80%;
  }
  @media only screen and (min-width: 992px) {
    width: 30%;
  }
`;
