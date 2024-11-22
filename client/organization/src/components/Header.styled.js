import styled from "styled-components";

export const HeaderCover = styled.header`
  width: 100%;
  display: flex;
  color: rgba(225, 225, 225, 0.8);
`;

export const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100px;
  width: 100%;
  h3 {
    font-family: "Kaushan Script", cursive;
  }
  @media only screen and (max-width: 600px) {
    width: 90%;
    margin-left: 5%;
    svg {
      display: block;
      transform: scale(250%);
    }
    button {
      display: none;
    }
  }
  @media only screen and (min-width: 768px) {
    width: 90%;
    margin-left: 5%;
    svg {
      display: block;
      transform: scale(250%);
    }
    button {
      display: none;
    }
  }
  @media only screen and (min-width: 992px) {
    width: 100%;
    margin-left: 0;
    svg {
      display: none;
    }
    button {
      display: block;
    }
  }
`;

export const Links = styled.nav`
  margin-right: 30px;
  a {
    padding-left: 30px;
    text-decoration: none;
    color: rgba(225, 225, 225, 0.8);
    transition: 0.5s ease-in-out;
    font-family: "Afacad Flux", sans-serif;
    &:hover {
      color: #ffd09b;
    }
  }

  @media only screen and (max-width: 600px) {
    display: none;
  }
  @media only screen and (min-width: 768px) {
    display: none;
  }
  @media only screen and (min-width: 992px) {
    display: block;
  }
`;
