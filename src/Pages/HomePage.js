/*users.jsx*/
import React from "react";
import { Link } from "react-router-dom";
import Wrapper from "../Components/Wrapper";
import Timeline from "../Components/Homepage/Timeline";
import Count from "../Components/Homepage/Count";

/*CSS*/
import "../assets/App.css";

/* We simply can use an array and loop and print each user */
const HomePage = () => {
  return (
    <Wrapper>
      <div>
        <Timeline />
        <Count />
      </div>
    </Wrapper>
  );
};

export default HomePage;
