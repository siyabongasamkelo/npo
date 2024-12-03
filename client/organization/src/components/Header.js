import React from "react";
import { HeaderCover, HeaderWrapper, Links } from "./Header.styled";
import { Link } from "react-router-dom";
import { Button } from "./common/Button.styled";
import { List } from "react-bootstrap-icons";
import { useState } from "react";
import HeaderSlider from "./HeaderSlider";
import { HashLink } from "react-router-hash-link";
const Header = () => {
  const [closeMenu, setCloseMenu] = useState(true);
  const [display, setDisplay] = useState("block");

  return (
    <HeaderCover>
      <HeaderWrapper>
        <Link to="/">
          <h3>Sitinonke</h3>
        </Link>
        <Links>
          <Link to="/">Home</Link>
          <HashLink to="/#aboutUs">About Us</HashLink>
          <HashLink to="/#ourTeam">Our Team</HashLink>
          <HashLink to="/#contactUs">Contact us</HashLink>
        </Links>

        <HashLink to="/#contactUs">
          <Button>Contact us</Button>
        </HashLink>
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
