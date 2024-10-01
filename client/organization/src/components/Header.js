import React from "react";
import { HeaderCover, HeaderWrapper, Links } from "./Header.styled";
import { Link } from "react-router-dom";
import { Button } from "./common/Button.styled";

const Header = () => {
  return (
    <HeaderCover>
      <HeaderWrapper>
        <h3>organization</h3>
        <Links>
          <Link to="/">Home</Link>
          <Link to="/">Home</Link>
          <Link to="/">Home</Link>
        </Links>
        <Button>Contact us</Button>
      </HeaderWrapper>
    </HeaderCover>
  );
};

export default Header;
