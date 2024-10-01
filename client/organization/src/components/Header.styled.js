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
  width: 80%;
  margin-left: 10%;
  svg {
    display: none;
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
`;

export const Links = styled.nav`
  margin-right: 30px;
  a {
    padding-left: 30px;
    text-decoration: none;
    color: rgba(225, 225, 225, 0.8);
    transition: 0.5s ease-in-out;
    &:hover {
      color: #ffd09b;
    }
  }

  @media only screen and (max-width: 600px) {
    display: none;
  }
`;
