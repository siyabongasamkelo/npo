import styled from "styled-components";

export const HomeCover = styled.div`
  height: 100vh;
  width: 100%;
  background-image: linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.7)),
    url(${(props) => props.backgroundImage});
  background-size: cover;
  background-position: center;
`;

export const HeroSection = styled.div`
  height: 60%;
  width: 80%;
  text-align: center;
  h1 {
    font-size: 84px;
    color: rgba(255, 255, 255, 0.9);
    margin-top: 15%;
    letter-spacing: 10px;
    line-height: 1.2;
    font-family: "Kaushan Script", cursive;
  }
  p {
    color: rgba(255, 255, 255, 0.9);
    margin-top: -2%;
    font-family: "Afacad Flux", sans-serif;
  }
  span {
    color: #fff7d1;
  }

  div {
    margin-top: 14%;
    margin-left: -90%;
  }

  div svg {
    transform: scale(150%);
    color: rgba(255, 255, 255, 0.9);
    margin-left: 40px;
    &:hover {
      color: #ffb0b0;
      transition: 0.5s ease-in-out;
      cursor: pointer;
    }
  }

  @media only screen and (max-width: 600px) {
    width: 100%;
    height: 100%;
    h1 {
      font-size: 40px;
      margin-top: 25%;
    }
    p {
      font-size: 14px;
      margin-top: 5%;
    }
    div {
      margin-left: -7%;
    }
    button {
      margin-top: 15%;
    }

    svg {
      margin-top: 20%;
    }
  }

  @media only screen and (min-width: 768px) {
    width: 100%;
    height: 100%;
    h1 {
      font-size: 62px;
      margin-top: 35%;
    }
    p {
      font-size: 22px;
      margin-top: 10%;
    }
    button {
      margin-top: 5%;
    }
    div {
      margin-top: 14%;
      margin-left: -6%;
    }
  }
  @media only screen and (min-width: 992px) {
    width: 100%;
    height: 100%;
    h1 {
      margin-top: 15%;
      font-size: 84px;
    }
    p {
      margin-top: 2%;
      font-size: 16px;
    }
    button {
      margin-top: 0;
    }
    div {
      margin-top: 14%;
      margin-left: -90%;
    }
  }
`;
