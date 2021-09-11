/*users.jsx*/
import React from "react";
import { Link } from "react-router-dom";
import Wrapper from "../Components/Wrapper";
import Timeline from "../Components/Homepage/Timeline";
import Count from "../Components/Homepage/Count";
import RangeSlider from "../Components/Homepage/RangeSlider";
import FilterContainer from "../Components/Homepage/FilterContainer";
import Typography from "@material-ui/core/Typography";

/*CSS*/
import "../assets/App.css";

/* We simply can use an array and loop and print each user */
const HomePage = () => {
  return (
    <Wrapper>
      <div>
        <Timeline />
        <Count />
        <div className="middleWrapper">
          <Typography variant="h3" align="center" color="textPrimary" gutterBottom>
            Lütfen faturalı tarife seçiniz.
          </Typography>
          <FilterContainer />
        </div>
      </div>
    </Wrapper>
  );
};

export default HomePage;
