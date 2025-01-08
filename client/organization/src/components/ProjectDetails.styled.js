import styled from "styled-components";

export const ProjectDetailsWrapper = styled.section`
  height: auto;
`;

export const ProjectDetailsCover = styled.div`
  height: auto;
  margin-bottom: 20%;

  @media only screen and (max-width: 600px) {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
  }

  @media only screen and (min-width: 768px) {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
  }

  @media only screen and (min-width: 992px) {
    align-items: start;
  }
`;
