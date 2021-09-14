import React from "react";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  advantageTitle: {
    fontFamily: "VodafoneFont,sans-serif",
    fontWeight: "100",
    marginBottom: "5rem",
  },
  advantageObject:{
      display:"flex",
      justifyContent:"baseline",
      alignItems:"center",
      flexDirection:"column",
      "& > div":{
          width:"50px",
          height:"50px",
          display:"flex",
          justifyContent:"center",
          alignItems:"center"
      }
  },
  advantageText:{
      fontFamily:"VodafoneFont,sans-serif",
      marginTop:"10px",
      fontSize:"18px"
  }

}));

const VodafoneAdvantages = () => {
  const classes = useStyles();
  return (
    <Box>
      <Typography
        variant="h3"
        align="center"
        className={classes.advantageTitle}
      >
        Dijitalden Vodafonelu olmanın avantajları neler?
      </Typography>

      <Grid container>
        {AdvantagesObject.map((item, index) => (
          <Grid key={index} item xs={12} md={6} lg={3} className={classes.advantageObject}>
            <Box>
              <img src={item.src} alt={item.title} />
            </Box>
            <Typography
              variant="subtitle"
              align="center"
              className={classes.advantageText}
            >
              {item.title}
            </Typography>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default VodafoneAdvantages;

const AdvantagesObject = [
  {
    src: "https://cms.vodafone.com.tr/static/img/content/21-03/31/footer1.png",
    title: "Dijitale Özel Avantajlar",
  },
  {
    src: "https://cms.vodafone.com.tr/static/img/content/21-03/31/footer2.png",
    title: "Her Ay Hediye GB",
  },
  {
    src: "https://cms.vodafone.com.tr/static/img/content/21-03/31/footer3.png",
    title: "Ücretsiz Sim Kart",
  },
  {
    src: "https://cms.vodafone.com.tr/static/img/content/21-03/31/footer4.png",
    title: "Ücretsiz Teslimat",
  },
];
