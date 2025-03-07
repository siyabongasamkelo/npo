import styled from "styled-components";

export const FooterWrapper = styled.footer`
  width: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  margin-top: -10%;
  padding-top: 2%;
`;

export const Links = styled.div`
  a {
    color: rgba(255, 255, 255, 1);
    text-decoration: none;
    display: flex;
    flex-direction: column;
    font-family: "Afacad Flux", sans-serif;
    padding-top: 5px;
  }
  svg {
    margin-left: 10px;
    transform: scale(90%);
    color: white;
    cursor: pointer;
    &:hover {
      color: #ffb0b0;
      transition: 0.5s ease-in-out;
    }
  }
  div {
    margin-left: -10px;
    margin-top: 5px;
    a {
      padding-top: 0;
    }
  }
  @media only screen and (max-width: 600px) {
    text-align: center;
    margin-left: 0;
    div {
      display: flex;
      justify-content: center;
    }
  }
  @media only screen and (min-width: 768px) {
    text-align: center;
    margin-left: 0;
  }
  @media only screen and (min-width: 992px) {
    text-align: left;
    margin-left: 10%;
  }
`;

export const CopyrightDiv = styled.div`
  width: 100%;
  height: 5vh;
  font-family: "Afacad Flux", sans-serif;
  text-align: center;
  color: rgba(255, 255, 255, 1);
  cursor: pointer;
`;
