/* eslint react/no-multi-comp: 0, react/prop-types: 0 */
import React, { useState } from "react";
import { Button, Popover, PopoverHeader, PopoverBody } from "reactstrap";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";

const useStyles = makeStyles({
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
    marginLeft: ".8rem",
    backgroundColor: "#fff",
  },
  filterSrc: {
    marginLeft: "6rem",
  },
  PopoverMain: {
    padding: "4rem",
    marginTop: "2rem",
    boxShadow: "0 19px 38px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.22)",
  },
});

const Example = (props) => {
  const classes = useStyles();

  const [popoverOpen, setPopoverOpen] = useState(false);
  const [popoverOpen2, setPopoverOpen2] = useState(false);
  const [popoverOpen3, setPopoverOpen3] = useState(false);

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
            <PopoverHeader>asd</PopoverHeader>
            <PopoverBody>{props.content}</PopoverBody>
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
            <PopoverHeader>asdee</PopoverHeader>
            <PopoverBody>{props.content}</PopoverBody>
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
            <PopoverHeader>asdkee</PopoverHeader>
            <PopoverBody>{props.content}</PopoverBody>
          </Card>
        </Popover>
      </div>
    </div>
  );
};

export default Example;
