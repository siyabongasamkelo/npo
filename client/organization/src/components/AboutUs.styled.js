import styled from "styled-components";

export const AboutUsCover = styled.section`
  background-color: white;
`;

export const AboutDiv = styled.div`
  @media only screen and (max-width: 600px) {
    h2 {
      text-align: center;
      margin-top: 10%;
    }
  }
  @media only screen and (min-width: 768px) {
    h2 {
      text-align: center;
      margin-top: 10%;
    }
  }
  @media only screen and (min-width: 992px) {
    h2 {
      font-size: 32px;
      text-align: center;
      margin-top: 5%;
    }
  }
`;

export const About = styled.div`
  @media only screen and (max-width: 600px) {
  }
  @media only screen and (min-width: 992px) {
    height: 50vh;
    display: flex;
  }
`;

export const AboutPic = styled.div`
  @media only screen and (max-width: 600px) {
    width: 90%;
    margin-left: 5%;
    img {
      height: 50%;
      width: 100%;
    }
  }
  @media only screen and (min-width: 768px) {
    width: 90%;
    margin-left: 5%;
    img {
      height: 50%;
      width: 100%;
    }
  }
  @media only screen and (min-width: 992px) {
    width: 50%;
    height: 100%;
    img {
      height: 90%;
      width: 70%;
      padding: 3%;
      margin-left: 20%;
    }
  }
`;

export const AboutText = styled.div`
  font-family: "Afacad Flux", sans-serif;

  @media only screen and (max-width: 600px) {
    width: 90%;
    margin-left: 5%;
    p {
      text-align: justify;
    }
  }
  @media only screen and (min-width: 768px) {
    width: 90%;
    margin-left: 5%;
    p {
      text-align: justify;
      font-size: 22px;
    }
  }
  @media only screen and (min-width: 992px) {
    width: 23%;
    height: 100%;
    p {
      font-size: 16px;
      text-align: left;
    }
  }
`;

export const OurTeamDiv = styled.div`
  @media only screen and (max-width: 600px) {
    width: 80%;
    margin-left: 10%;
    h2 {
      font-size: 32px;
      text-align: center;
    }
  }
  @media only screen and (min-width: 768px) {
    h2 {
      text-align: center;
      font-size: 32px;
    }
  }
  @media only screen and (min-width: 992px) {
    width: 65%;
    margin-left: 17.5%;
    h2 {
      font-size: 32px;
      text-align: center;
    }
  }
`;

export const OurTeam = styled.div`
  display: flex;
  justify-content: space-between;
  @media only screen and (max-width: 600px) {
    flex-direction: column;
    align-items: center;
  }
  @media only screen and (min-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
  @media only screen and (min-width: 992px) {
    flex-direction: row;
  }
`;
