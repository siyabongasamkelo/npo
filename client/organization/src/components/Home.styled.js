import styled from "styled-components";

export const HomeCover = styled.div`
  height: 100vh;
  width: 100%;
  background-image: linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.7)),
    url(${(props) => props.backgroundImage});
  background-size: cover;
  background-position: center;
`;
