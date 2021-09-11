/* eslint react/no-multi-comp: 0, react/prop-types: 0 */
import React, { useState } from "react";
import { Button, Popover, PopoverHeader, PopoverBody } from "reactstrap";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import RangeSlider from "../Components/Homepage/RangeSlider";
import Slider from "@material-ui/core/Slider";

const useStyles = makeStyles({
  root: {
    width: 350,
    marginTop: 20,
    padding: "2rem",
  },
  popoverContainer: {
    display: "flex",
    flexDirection: "row",
  },
  popoverButton: {
    borderRadius: "30px",
    outline: "none",
    border: "1px solid #666",
    color: "#999",
    fontFamily: "VodafoneFont, sans-serif",
    cursor: "pointer",
    padding: ".8rem 1.5rem",
    fontSize: "16px",
    marginLeft: "15px",
    backgroundColor: "#fff",
  },
  filterSrc: {
    marginLeft: "6rem",
  },
  PopoverMain: {
    padding: "1.5rem",
    marginTop: "2rem",
    boxShadow: "0 19px 38px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.22)",
  },
});

const marks = [
  {
    value: 0,
    label: "0 Tl",
  },
  {
    value: 125,
    label: "125 Tl",
  },
  {
    value: 250,
    label: "250 Tl",
  },
];

const Example = (props) => {
  const classes = useStyles();
  const [value, setValue] = React.useState(50);
  const [valueSecond, setValueSecond] = React.useState(50);
  const [valueThird, setValueThird] = React.useState(50);

  const popoverPrices = {
    firstPrice: value,
    secondNet: valueSecond,
    thirdMinute: valueThird,
  };

  const [popoverOpen, setPopoverOpen] = useState(false);
  const [popoverOpen2, setPopoverOpen2] = useState(false);
  const [popoverOpen3, setPopoverOpen3] = useState(false);

  
  const handleChange = (event, newValue) => {
    setValue(newValue);
    popoverPrices.firstPrice = newValue;
    console.log(popoverPrices);
  };
  const handleChangeSecond = (event, newValue) => {
    setValueSecond(newValue);
    popoverPrices.secondNet = newValue;
    console.log(popoverPrices);
  };
  const handleChangeThird = (event, newValue) => {
    setValueThird(newValue);
    popoverPrices.thirdMinute = newValue;
    console.log(popoverPrices);
  };

  const toggle = () => {
    setPopoverOpen(!popoverOpen);
    setPopoverOpen2(false);
    setPopoverOpen3(false);
  };
  const toggle2 = () => {
    setPopoverOpen(false);
    setPopoverOpen2(!popoverOpen2);
    setPopoverOpen3(false);
  };
  const toggle3 = () => {
    setPopoverOpen(false);
    setPopoverOpen2(false);
    setPopoverOpen3(!popoverOpen3);
  };

  return (
    <div className={classes.popoverContainer}>
      <div>
        <Button id="Popover1" type="button" className={classes.popoverButton}>
          <span>Fiyat</span>
          <span className={classes.filterSrc}>
            <i class="fas fa-chevron-down"></i>
          </span>
        </Button>
        <Popover
          placement="bottom"
          isOpen={popoverOpen}
          target="Popover1"
          toggle={toggle}
        >
          <Card className={classes.PopoverMain}>
            <PopoverBody>
              <div className={classes.root}>
                <Slider
                  value={value}
                  defaultValue={50}
                  onChange={handleChange}
                  aria-labelledby="discrete-slider-custom"
                  step={1}
                  valueLabelDisplay="auto"
                  marks={marks}
                  max={250}
                />
              </div>
            </PopoverBody>
          </Card>
        </Popover>
      </div>
      <div>
        <Button id="Popover2" type="button" className={classes.popoverButton}>
          <span>İnternet</span>
          <span className={classes.filterSrc}>
            <i class="fas fa-chevron-down"></i>
          </span>
        </Button>
        <Popover
          placement="bottom"
          isOpen={popoverOpen2}
          target="Popover2"
          toggle={toggle2}
        >
          <Card className={classes.PopoverMain}>
            <PopoverBody>
              <div className={classes.root}>
                <Slider
                  value={valueSecond}
                  defaultValue={50}
                  onChange={handleChangeSecond}
                  aria-labelledby="discrete-slider-custom"
                  step={1}
                  valueLabelDisplay="auto"
                  marks={marks}
                  max={250}
                />
              </div>
            </PopoverBody>
          </Card>
        </Popover>
      </div>
      <div>
        <Button id="Popover3" type="button" className={classes.popoverButton}>
          <span>Dakika</span>
          <span className={classes.filterSrc}>
            <i class="fas fa-chevron-down"></i>
          </span>
        </Button>
        <Popover
          placement="bottom"
          isOpen={popoverOpen3}
          target="Popover3"
          toggle={toggle3}
        >
          <Card className={classes.PopoverMain}>
            <PopoverBody>
              <div className={classes.root}>
                <Slider
                  value={valueThird}
                  defaultValue={50}
                  onChange={handleChangeThird}
                  aria-labelledby="discrete-slider-custom"
                  step={1}
                  valueLabelDisplay="auto"
                  marks={marks}
                  max={250}
                />
              </div>
            </PopoverBody>
          </Card>
        </Popover>
      </div>
    </div>
  );
};

export default Example;
