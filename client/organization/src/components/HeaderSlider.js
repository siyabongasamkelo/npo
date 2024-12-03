import {
  CloseButton,
  Copyrights,
  HeaderSliderStyled,
  Links,
  SocialMediaIcons,
} from "./HeaderSlider.styled";
import { X } from "react-bootstrap-icons";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Facebook, Whatsapp, Instagram, Twitter } from "react-bootstrap-icons";
import { HashLink } from "react-router-hash-link";

const HeaderSlider = ({ closeMenu, setCloseMenu, display }) => {
  return (
    <HeaderSliderStyled
      as={motion.div}
      animate={{
        x: -30,
        width: closeMenu ? 0 : 420,
      }}
      transition={{ duration: 0.5 }}
      dis={display}
    >
      <CloseButton>
        <X onClick={setCloseMenu} />
      </CloseButton>
      <Links onClick={setCloseMenu}>
        <Link to={"/"}>Home</Link>
        <HashLink to="/#aboutUs">About Us</HashLink>
        <HashLink to="/#ourTeam">Our Team</HashLink>
        <HashLink to="/#contactUs">Contact us</HashLink>
      </Links>
      {/* <div style={{ width: "90%", marginLeft: "5%" }}></div> */}
      <Copyrights>
        <p>
          copyright&copy; {new Date().getFullYear()} All rights reserved
          siyabonga Mazibuko
        </p>
      </Copyrights>
      <SocialMediaIcons>
        <Facebook />
        <Whatsapp />
        <Instagram />
        <Twitter />
      </SocialMediaIcons>
    </HeaderSliderStyled>
  );
};

export default HeaderSlider;
