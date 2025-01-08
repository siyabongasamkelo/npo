import styled from "styled-components";

export const ProjectCardWrapper = styled.section`
  height: 50vh;
  height: auto;
  width: 23%;
  background-color: rgba(0, 0, 0, 0.8);
  border-radius: 30px;

  @media only screen and (max-width: 600px) {
    width: 90%;
    margin-left: 5%;
    margin-top: 5%;
  }
  @media only screen and (min-width: 768px) {
    width: 80%;
    margin: 10%;
    margin-top: 5%;
  }
  @media only screen and (min-width: 992px) {
    width: 23%;
    margin-top: 0;
    margin-left: 0;
  }
`;

export const ImageDiv = styled.div`
  height: 45%;
  img {
    height: 90%;
    width: 90%;
    margin-top: 5%;
    margin-left: 5%;
    border-radius: 20px;
  }
`;

export const TextDiv = styled.div`
  height: 35%;
  width: 90%;
  margin-top: 5%;
  margin-left: 5%;
  p {
    font-size: 14px;
    color: rgba(255, 255, 255, 0.7);
    margin-top: 2%;
    margin-bottom: 2%;
  }
  h6 {
    color: rgba(255, 255, 255, 0.7);
  }
  text-align: center;
  @media only screen and (min-width: 768px) {
    p {
      font-size: 16px;
    }
  }
  @media only screen and (min-width: 992px) {
    p {
      font-size: 14px;
    }
  }
`;

export const ProjectCardAction = styled.div`
  height: auto;
  display: flex;
  justify-content: center;
  margin-top: 2%;
  a {
    text-decoration: none;
    color: rgba(0, 0, 0, 0.7);
  }
  button {
    width: 45%;
    margin-bottom: 5%;
  }

  @media only screen and (max-width: 600px) {
    margin-bottom: 5%;
  }
  @media only screen and (min-width: 768px) {
    margin-bottom: 5%;
  }
  @media only screen and (min-width: 992px) {
    margin-bottom: 5%;
  }
`;
