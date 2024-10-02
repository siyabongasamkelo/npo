import styled from "styled-components";

export const AboutUsCover = styled.section`
  background-color: white;
`;

export const AboutDiv = styled.div`
  @media only screen and (min-width: 992px) {
    h2 {
      font-size: 32px;
      text-align: center;
    }
  }
`;

export const About = styled.div`
  height: 50vh;
  display: flex;
`;

export const AboutPic = styled.div`
  @media only screen and (min-width: 992px) {
    width: 50%;
    height: 100%;
    img {
      height: 90%;
      width: 90%;
      padding: 5%;
    }
  }
`;

export const AboutText = styled.div`
  @media only screen and (min-width: 992px) {
    width: 50%;
    height: 100%;
  }
`;
