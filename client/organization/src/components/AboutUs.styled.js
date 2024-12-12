import styled from "styled-components";

export const AboutUsCover = styled.section`
  background-color: white;
  /* background-color: red; */
`;

export const AboutDiv = styled.div`
  h2 {
    font-family: "Kaushan Script", cursive;
  }

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
    margin-top: 5%;
    img {
      height: 50%;
      width: 100%;
    }
  }
  @media only screen and (min-width: 768px) {
    width: 90%;
    margin-left: 5%;
    margin-top: 5%;
    img {
      height: 50%;
      width: 100%;
    }
  }
  @media only screen and (min-width: 992px) {
    width: 45%;
    height: 100%;
    img {
      height: 70%;
      width: 90%;
      margin-top: 5%;
      margin-left: 5%;
      /* object-fit: fill; */
      /* background-position: center; */
    }
  }
`;

export const AboutText = styled.div`
  font-family: "Afacad Flux", sans-serif;

  @media only screen and (max-width: 600px) {
    width: 90%;
    margin-left: 5%;
    margin-top: 5%;
    p {
      /* text-align: justify; */
    }
  }
  @media only screen and (min-width: 768px) {
    width: 90%;
    margin-left: 5%;
    margin-top: 5%;
    p {
      text-align: justify;
      font-size: 22px;
    }
  }
  @media only screen and (min-width: 992px) {
    width: 35%;
    height: 100%;
    p {
      font-size: 16px;
      text-align: left;
      margin-top: 5%;
    }
  }
`;

export const OurTeamDiv = styled.div`
  h2 {
    font-family: "Kaushan Script", cursive;
  }
  @media only screen and (max-width: 600px) {
    width: 80%;
    margin-left: 10%;
    margin-top: 5%;
    h2 {
      font-size: 32px;
      text-align: center;
    }
  }
  @media only screen and (min-width: 768px) {
    margin-top: 5%;
    h2 {
      text-align: center;
      font-size: 32px;
    }
  }
  @media only screen and (min-width: 992px) {
    width: 100%;
    margin-top: 5%;
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
