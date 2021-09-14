import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Wrapper from "../Components/Wrapper";
import Box from "@material-ui/core/Box";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  heading: {
      padding:"2rem",
    fontSize: "20px",
    fontWeight: theme.typography.fontWeightRegular,
    fontFamily:"VodafoneFont,sans-serif"
  },
  advantageTitle: {
    fontFamily: "VodafoneFont,sans-serif",
    fontWeight: "100",
    color: "#333",
  },
  desc: {
    fontSize: "17px",
    fontFamily: "VodafoneFont,sans-serif",
    margin: "3rem 0",
    color: "#333",

    fontWeight: "100",
  },
  accordionDetail:{
      display:"flex",
      flexDirection:"column"
  }
}));

export default function VodafoneAccordion() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Wrapper>
        <div className="middleWrapper">
          <Box mb={5}>
            <Typography
              variant="h3"
              align="center"
              className={classes.advantageTitle}
            >
              Faturalı hat sahibi olmak artık çok kolay!
            </Typography>
            <Box>
              <Typography className={classes.desc}>
                Vodafone’un size özel tarileri ile Vodafone dünyasına katılmak
                artık çok kolay. Numara taşıma ve yeni faturalı hat kampanyaları
                ile numaranızı Vodafone’a taşıyabilir ya da yeni bir Vodafone
                faturalı hat alabilirsiniz. Numara taşıma yoluyla Vodafone’a
                geçiş ya da yeni faturalı hat başvurularınızı web sitemizden
                hızlıca gerçekleştirebilirsiniz.
              </Typography>
              <Typography className={classes.desc}>
                SIM kartınızı ücretsiz istediğiniz adrese teslim edebiliriz.
                Sadece 2 dakikada numara taşıyarak Vodafone’a geçebilirsiniz.
                Hemen numara taşıma başvurusu yapın, hattınızı ücretsiz
                ayağınıza getirelim. Vodafone’un hediye GB’lı numara taşıma ve
                yeni faturalı hat kampanyalarını kaçırmayın.
              </Typography>
            </Box>
          </Box>

          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon fontSize="large" color="error"/>}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography className={classes.heading}>Kullanım Esasları</Typography>
            </AccordionSummary>
            <AccordionDetails className={classes.accordionDetail}>
              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon fontSize="large" color="error"/>}
                  aria-controls="panel2a-content"
                  id="panel2a-header"
                >
                  <Typography className={classes.heading}>
                    Accordion 2
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    2
                  </Typography>
                </AccordionDetails>
              </Accordion>
              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon fontSize="large" color="error"/>}
                  aria-controls="panel3a-content"
                  id="panel3a-header"
                >
                  <Typography className={classes.heading}>
                    Accordion 3
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    3
                  </Typography>
                </AccordionDetails>
              </Accordion>
              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon fontSize="large" color="error"/>}
                  aria-controls="panel4a-content"
                  id="panel4a-header"
                >
                  <Typography className={classes.heading}>
                    Accordion 4
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    4
                  </Typography>
                </AccordionDetails>
              </Accordion>
            </AccordionDetails>
          </Accordion>
        </div>
      </Wrapper>
    </div>
  );
}
