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
  margin-left: 10%;
  text-align: center;
  h1 {
    font-size: 84px;
    color: rgba(255, 255, 255, 0.9);
    margin-top: 15%;
    letter-spacing: 10px;
    line-height: 1.2;
  }
  p {
    color: rgba(255, 255, 255, 0.9);
    margin-top: -2%;
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
`;
