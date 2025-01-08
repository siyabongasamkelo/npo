import styled from "styled-components";

export const ProjectDetailsCardWrapper = styled.section`
  background-color: rgba(0, 0, 0, 0.8);
  margin-top: 5%;
  border-radius: 30px;
  padding: 15px;
  width: 80%;
`;

export const ProjectDetailsCardCover = styled.div``;

export const ProjectDetailsCardAction = styled.div``;

export const ProjectDetailsCardData = styled.div`
  display: flex;

  .images {
    width: 35%;
    height: 50vh;
    background-color: red;
    background-color: rgba(0, 0, 0, 0.7);

    padding: 10px;
    border-radius: 30px;
    .row1 {
      width: 100%;
      height: 50%;
      img {
        height: 90%;
        width: 100%;
        border-radius: 20px;
      }
    }
    .row2 {
      width: 100%;
      height: 50%;
      img {
        height: 90%;
        width: 100%;
        border-radius: 20px;
      }
    }
  }
  .details {
    width: 55%;
    margin-left: 5%;
    height: auto;
    color: white;
    h4 {
      font-family: "Kaushan Script", cursive;
    }

    div {
      margin-top: 5%;
      font-size: 14px;
    }
  }

  @media only screen and (max-width: 600px) {
    flex-direction: column;
    .images {
      width: 100%;
    }
    .details {
      width: 100%;
      margin-left: 0;

      h4 {
        margin-top: 5%;
      }
    }
  }
  @media only screen and (min-width: 768px) {
    flex-direction: column;

    .images {
      width: 100%;
    }
    .details {
      width: 100%;
      margin-left: 0;

      h4 {
        margin-top: 5%;
      }
    }
  }
  @media only screen and (min-width: 992px) {
    flex-direction: row;
    .images {
      width: 35%;
    }
    .details {
      width: 55%;
      margin-left: 5%;
    }
  }
`;
