import React from "react";
import { HomeCover } from "./Home.styled";
import background from "../assets/img/background.jpg";
import Header from "./Header";

const Home = () => {
  return (
    <HomeCover backgroundImage={background}>
      <Header />
    </HomeCover>
  );
};

export default Home;
