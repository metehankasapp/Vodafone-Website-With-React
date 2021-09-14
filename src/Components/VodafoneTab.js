import React from "react";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
  vdfnTabHeader: {
    fontFamily: "VodafoneFont,sans-serif",
    margin: "5rem 0",
    color: "#333",
  },
  tabInner:{
      marginBottom:"3rem"
  }
}));

const VodafoneTab = (props) => {
  const classes = useStyles();

  return (
    <Box>
      <Typography variant="h3" align="center" className={classes.vdfnTabHeader}>
        {props.label}
      </Typography>
      <Grid container>
        <Grid item xs={12} lg={6}>
          <Box>
            {props.object.firstArea.map((item) => (
              <Box key={item.key} className={classes.tabInner}>
                <Typography variant="h6" align="left">{item.title}</Typography>
                <Typography variant="subtitle" align="center">{item.text}</Typography>
              </Box>
            ))}
          </Box>
        </Grid>
        <Grid item xs={12} lg={6}>
        <Box>
            {props.object.secondArea.map((item) => (
              <Box key={item.key} className={classes.tabInner}>
                <Typography variant="h6" align="left">{item.title}</Typography>
                <Typography variant="subtitle" align="center">{item.text}</Typography>
              </Box>
            ))}
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default VodafoneTab;
