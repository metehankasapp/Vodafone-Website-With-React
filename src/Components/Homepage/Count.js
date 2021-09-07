import React from "react";
import Clock from "./Clock";
import Typography from '@material-ui/core/Typography';
import Box from "@material-ui/core/Box";

const Count = () => {
  let deadline = "september,13, 2021";

  return (
    <div>
      
      <Clock deadline={deadline} />
    </div>
  );
};

export default Count;
