import styled from "styled-components";

export const Home2Wrapper = styled.section`
  height: 100vh;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.9);
`;

export const Home2Div = styled.div`
  height: 80vh;
  width: 100%;

  .col1 {
    h1 {
      font-size: 64px;
      color: rgba(255, 255, 255, 0.9);
      letter-spacing: 10px;
      line-height: 1.2;
      font-family: "Kaushan Script", cursive;
      text-align: center;
      padding-top: 5%;
    }
  }
  .col2 {
    height: 75%;
    width: 100%;
    margin-top: 3%;
    display: flex;
    justify-content: space-between;
    div {
      width: 15%;
      height: 100%;
    }
    .row1,
    .row5 {
      display: flex;
      align-items: center;
      img {
        height: 50%;
        width: 100%;
        border-radius: 30px;
        object-fit: fill;
        background-position: center;
      }
    }

    .row2,
    .row4 {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      height: 85%;
      margin-top: 3.5%;

      img {
        height: 48%;
        width: 100%;
        border-radius: 30px;
      }

      .pic1 {
        height: 35%;
      }
      .pic2 {
        height: 60%;
      }
    }

    .row3 {
      img {
        height: 100%;
        width: 100%;
        border-radius: 30px;
      }
    }
  }
`;
