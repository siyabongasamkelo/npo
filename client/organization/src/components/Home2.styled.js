import styled from "styled-components";

export const Home2Wrapper = styled.section`
  height: 100vh;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.9);
`;

export const Home2Div = styled.div`
  height: 65vh;
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
      width: 18%;
      height: 100%;
    }
    .row1,
    .row5 {
      display: flex;
      align-items: center;
      img {
        height: 50%;
        width: 100%;
        border-radius: 20px;
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
        border-radius: 20px;
      }

      .pic1 {
        height: 40%;
      }
      .pic2 {
        height: 55%;
      }
    }

    .row3 {
      img {
        height: 100%;
        width: 100%;
        border-radius: 20px;
      }
    }
  }

  @media only screen and (max-width: 600px) {
    height: 65vh;
    .col1 {
      h1 {
        font-size: 32px;
      }
    }

    .col2 {
      height: 80%;

      .row1,
      .row5 {
        img {
          height: 20%;
          width: 100%;
        }
      }

      .row2,
      .row4 {
        justify-content: center;
        .pic1 {
          height: 30%;
        }
        .pic2 {
          height: 25%;
          margin-top: 15%;
        }
      }

      .row3 {
        background-color: #fff7d1;
        border-radius: 20px;
        img {
          height: 60%;
          width: 100%;
          border-radius: 20px;
          margin-top: 110%;
          display: none;
        }
      }
    }
  }

  @media only screen and (min-width: 768px) {
    height: 65vh;
    .col1 {
      h1 {
        font-size: 44px;
      }
    }

    .col2 {
      height: 80%;

      .row1,
      .row5 {
        img {
          height: 30%;
          width: 100%;
        }
      }

      .row2,
      .row4 {
        justify-content: center;
        .pic1 {
          height: 40%;
        }
        .pic2 {
          height: 35%;
          margin-top: 15%;
        }
      }

      .row3 {
        background-color: #fff7d1;
        border-radius: 20px;
        img {
          height: 60%;
          width: 100%;
          border-radius: 20px;
          margin-top: 110%;
          display: none;
        }
      }
    }
  }

  @media only screen and (min-width: 992px) {
    .col2 {
      .row1,
      .row5 {
        display: flex;
        align-items: center;
        img {
          height: 50%;
          width: 100%;
          border-radius: 20px;
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
          border-radius: 20px;
        }

        .pic1 {
          height: 40%;
        }
        .pic2 {
          height: 55%;
        }
      }

      .row3 {
        img {
          display: block;
          height: 100%;
          margin-top: 0;
        }
      }
    }
  }
`;

export const ActionDiv = styled.div`
  display: flex;
  justify-content: space-between;
  color: rgba(255, 255, 255, 0.8);

  margin-top: 7%;
  .para {
    p {
      font-family: "Kaushan Script", cursive;
      font-size: 14px;
      transform: rotate(-15deg);
    }
  }

  div {
    svg {
      margin-left: 15px;
      transform: scale(120%);
      cursor: pointer;
      transition: 0.5s ease-in-out;
      &:hover {
        color: #ffb0b0;
      }
    }
  }

  @media only screen and (max-width: 600px) {
    justify-content: center;

    .para {
      display: none;
    }
    .social-media-icons {
      position: absolute;
      margin-top: 15%;
      margin-left: -35%;
    }
  }
`;
