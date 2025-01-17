import styled from "styled-components";

export const PrevProjWrapper = styled.section`
  h2 {
    font-family: "Kaushan Script", cursive;
    text-align: center;
    margin-top: 10%;
  }
`;

export const ProjectsCover = styled.div`
  margin-top: 5%;
  margin-bottom: 5%;
  display: flex;
  justify-content: space-evenly;
  width: 100%;

  @media only screen and (max-width: 600px) {
    flex-direction: column;
  }
  @media only screen and (min-width: 768px) {
    flex-direction: column;
  }
  @media only screen and (min-width: 992px) {
    flex-direction: row;
    margin-left: 5%;
  }
`;
