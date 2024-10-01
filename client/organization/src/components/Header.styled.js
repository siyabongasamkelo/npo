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
`;
