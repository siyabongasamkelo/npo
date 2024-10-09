import styled from "styled-components";

export const TeamCoverCard = styled.div`
  height: 45vh;
  width: 23%;
  margin-bottom: 30px;
  margin-top: 3%;
  @media only screen and (max-width: 600px) {
    width: 85%;
  }
  @media only screen and (min-width: 768px) {
    width: 75%;
    height: 70vh;
  }
  @media only screen and (min-width: 992px) {
    height: 45vh;
    width: 23%;
  }
`;

export const ProfilePhoto = styled.div`
  height: 45%;
  width: 100%;
  background-image: url(${(props) => props.backgroundImage});
  background-size: cover;
  background-position: center;
  border-radius: 10px 10px 0 0;
`;

export const Details = styled.div`
  height: 30%;
  text-align: center;
  font-family: "Afacad Flux", sans-serif;
  p {
    padding-top: 2%;
  }
  @media only screen and (min-width: 768px) {
    p {
      font-size: 22px;
    }
  }
  @media only screen and (min-width: 992px) {
    p {
      font-size: 17px;
    }
  }
`;

export const Action = styled.div`
  height: 15%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
