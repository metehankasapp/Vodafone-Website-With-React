import React from "react";
import Wrapper from "../../Components/Wrapper";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import SimplePopover from "../SimplePopover";

const useStyles = makeStyles((theme) => ({
  filterTitle: {
    fontSize: "16px",
    fontFamily: "VodafoneFont, Sans-serif",
    color: "#999",
    marginRight: "5rem",
  },
}));

const FilterContainer = () => {
  const classes = useStyles();

  return (
    <Wrapper>
      <Grid container>
        <Grid item xs={6}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "baseline",
              alignItems: "center",
            }}
          >
            <Typography variant="subtitle1" className={classes.filterTitle}>
              Filtre
            </Typography>
            <Box sx={{display:"flex",flexDirection:"row"}}>
                <SimplePopover />
            </Box>
          </Box>
        </Grid>
        <Grid item xs={6}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "end",
            }}
          >
            asdasd
          </Box>
        </Grid>
      </Grid>
    </Wrapper>
  );
};

export default FilterContainer;
