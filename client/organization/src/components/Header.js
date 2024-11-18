import React from "react";
import { HeaderCover, HeaderWrapper, Links } from "./Header.styled";
import { Link } from "react-router-dom";
import { Button } from "./common/Button.styled";
import { List } from "react-bootstrap-icons";
import { useState } from "react";
import HeaderSlider from "./HeaderSlider";
const Header = () => {
  const [closeMenu, setCloseMenu] = useState(true);
  const [display, setDisplay] = useState("block");

  return (
    <HeaderCover>
      <HeaderWrapper>
        <h3>Sitinonke</h3>
        <Links>
          <Link to="/">Home</Link>
          <Link to="/">About Us</Link>
          <Link to="/">Our Mission</Link>
          <Link to="/">Contact us</Link>
        </Links>
        <Button>Contact us</Button>
        <List
          onClick={() => {
            closeMenu ? setDisplay("none") : setDisplay("block");
            setCloseMenu(false);
          }}
        />
      </HeaderWrapper>
      <HeaderSlider
        setCloseMenu={() => {
          setCloseMenu(true);
        }}
        closeMenu={closeMenu}
        display={display}
      ></HeaderSlider>
    </HeaderCover>
  );
};

export default Header;
