import styled from "styled-components";

export const HeaderSliderStyled = styled.div`
  height: 100vh;
  width: 100%;
  background-color: black;
  position: absolute;
  z-index: 1;
  top: 0%;
  border-radius: 10px 0 0 10px;
  overflow-x: hidden;
  font-family: "Great Vibes", cursive;
  font-family: "Kalam", cursive;
  color: white;
  @media only screen and (min-width: 992px) {
    display: none;
  }
`;

export const CloseButton = styled.div`
  height: 90px;
  margin-bottom: 20%;
  svg {
    fill: rgba(0, 0, 0, 0.8);
    transform: scale(3);
    margin: 30px;
    margin-left: 15%;
    color: white;
    fill: white;
  }
`;

export const Links = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 10%;
  a {
    text-decoration: none;
    color: white;
    font-size: 20px;
    margin-bottom: 20px;
  }
`;

export const Copyrights = styled.div`
  width: 80%;
  margin-left: 12%;
  margin-top: 50%;
  p {
    text-align: center;
  }
`;

export const SocialMediaIcons = styled.div`
  margin-left: 30%;
  svg {
    transform: scale(1.5);
    margin-left: 10%;
    margin-top: 5%;
  }
`;
