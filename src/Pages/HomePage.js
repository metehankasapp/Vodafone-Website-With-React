/*users.jsx*/
import React from "react";
import { Link } from "react-router-dom";
import Wrapper from "../Components/Wrapper";
import Timeline from "../Components/Homepage/Timeline";
import Count from "../Components/Homepage/Count";
import RangeSlider from "../Components/Homepage/RangeSlider";
import FilterContainer from "../Components/Homepage/FilterContainer";
import Typography from "@material-ui/core/Typography";
import VodafoneAdvantages from "../Components/VodafoneAdvantages";
import VodafoneAccordion from "../Components/VodafoneAccordion";


/*CSS*/
import "../assets/App.css";

/* We simply can use an array and loop and print each user */
const HomePage = () => {
  return (
    <div>
      <Wrapper>
        <div>
          <Timeline />
          <Count />
          <div className="middleWrapper">
            <Typography
              variant="h3"
              align="center"
              color="textPrimary"
              gutterBottom
            >
              Lütfen faturalı tarife seçiniz.
            </Typography>
            <FilterContainer />
          </div>
          <div className="wrapperAdvantages">
              <VodafoneAdvantages />
          </div>
          <div>
            <VodafoneAccordion />
          </div>
        </div>
      </Wrapper>
    </div>
  );
};

export default HomePage;
