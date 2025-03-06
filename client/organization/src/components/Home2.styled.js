import styled from "styled-components";

export const Home2Wrapper = styled.section`
  height: 100vh;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.9);
`;

export const Home2Div = styled.div`
  height: 65vh;
  width: 100%;
  margin-top: -5%;

  .big-text {
    h1 {
      font-size: 84px;
      color: rgba(255, 255, 255, 0.9);
      margin-top: 15%;
      letter-spacing: 10px;
      line-height: 1.2;
      font-family: "Kaushan Script", cursive;
      text-align: center;
    }
  }

  .intro-text {
    p {
      color: rgba(255, 255, 255, 0.8);
      font-family: "Kaushan Script", cursive;
      text-align: center;
      margin-top: 2%;
    }
    span {
      font-size: 38px;
      color: #ffb0b0;
    }
  }

  .action {
    display: flex;
    justify-content: center;
    margin-top: 5%;
    button {
      background-color: #ffb0b0;
      color: rgba(255, 255, 255, 0.8);
      font-size: 18px;
      width: 180px;
      height: 50px;
    }
  }

  @media only screen and (max-width: 600px) {
    margin-top: 35%;
    .big-text {
      h1 {
        font-size: 40px;
      }
    }
    .intro-text {
      p {
        font-size: 14px;
      }
      span {
        font-size: 20px;
      }
    }
    .action {
      margin-top: 5%;
    }
  }

  @media only screen and (min-width: 768px) {
    margin-top: 20%;
    .big-text {
      h1 {
        font-size: 60px;
      }
    }
    .intro-text {
      p {
        font-size: 22px;
      }
      span {
        font-size: 38px;
      }
    }
  }

  @media only screen and (min-width: 992px) {
    margin-top: -5%;
    .big-text {
      h1 {
        font-size: 84px;
      }
    }
    .intro-text {
      p {
        font-size: 16px;
      }
      span {
        font-size: 38px;
      }
    }
  }
`;
