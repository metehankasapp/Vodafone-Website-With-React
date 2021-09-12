import React from "react";
/*Components*/
import Clock from "./Clock";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
/*Styles*/
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  bgContainer: {
    padding: "3rem 15rem",
    background: "rgb(156,38,144)",
    background:
      "linear-gradient(90deg, rgba(156,38,144,1) 19%, rgba(154,32,13,1) 85%)",
  },
  bgcHead: {
    color: "#fff",
    fontSize: "50px",
    "@media (max-width:780px)": {
      fontSize: "40px",
    },
    fontFamily: "VodafoneFont, sans-serif",
    textAlign: "center",
  },
  bgcTitle: {
    color: "#fff",
    fontSize: "18px",
    fontFamily: "VodafoneFont, sans-serif",
    textAlign: "center",
  },
});

const Count = () => {
  const classes = useStyles();

  let deadline = "october,25, 2021";

  return (
    <div className={classes.bgContainer}>
      <Typography variant="h2" className={classes.bgcHead}>
        Genç tarifelere özel 12 ay geçerli aylık 5GB'a varan internet hediye!
      </Typography>
      <Box sx={{ textAlign: "center", marginTop: "1.5rem" }}>
        <Typography variant="subtitle" className={classes.bgcTitle}>
          Sınırlı süreli bu fırsatı kaçırmayın, avantajlı tarifeleri hemen
          inceleyin!
        </Typography>
      </Box>

      <Box sx={{ textAlign: "center", marginTop: "1.5rem" }}>
        <Clock deadline={deadline} />
      </Box>
    </div>
  );
};

export default Count;
