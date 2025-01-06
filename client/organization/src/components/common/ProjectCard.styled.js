import styled from "styled-components";

export const ProjectCardWrapper = styled.section`
  height: 50vh;
  width: 23%;
  background-color: rgba(0, 0, 0, 0.8);
  border-radius: 30px;
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
  }
  text-align: center;
`;

export const ProjectCardAction = styled.div`
  display: flex;
  justify-content: center;
  button {
    width: 45%;
  }
`;
