import React from "react";
/*Styles*/
import { makeStyles } from "@material-ui/core/styles";
import VodafoneLogo from "../../assets/images/vodafoneicon.png";
/*Components*/
import Wrapper from "../Wrapper";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import Avatar from "@material-ui/core/Avatar";


const useStyles = makeStyles({
  Timeline: {
    backgroundColor: "",
  },
  timelineUl: {
    position: "relative",
    display: "flex",
    flexDirection: "row",
    marginTop: "0rem",
    marginLeft: "3rem",
    "& li": {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      flexDirection: "column",
      marginLeft: "6rem",
    },
  },
  hr: {
    transform: "rotate(180deg)",
    position: "absolute",
    top: "12px",
    width: "77%",
    left: "90px",
    height: "4px",
    color: "#dadada",
    padding: "0",
    border: "none",
    backgroundColor: "#dadada",
  },
  fspan: {
    borderRadius: "50%",
    width: "30px",
    height: "30px",
    color: "#fff",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#333333",
    padding: "1rem",
    zIndex: "5",
    fontFamily: "VodafoneFont, sans-serif",
    fontSize: "20px",
  },
  sspan: {
    fontFamily: "VodafoneFont, sans-serif",
    fontSize: "13px",
    color: "#adadad",
    marginTop: ".5rem",
  },
  logo: {
    width: "48px",
    height: "48px",
  },

  hrDotted: {
    border: "none",
    borderTop: "3px dashed #dadada",
    height: "4px",
    position: "absolute",
    top: "12px",
    width: "20%",
    right: "-100px",
  },
  dotted: {
    color: "#dadada",
    fontSize: "22px",
    display: "flex",
    justifyContent: "center",
  },
  timelineIcon: {
    width: "30px",
  },
});

const Timelines = [
  {
    key: 1,
    text: "Tarife Seçimi",
  },
  {
    key: 2,
    text: "Hat İşlemleri",
  },
  {
    key: 3,
    text: "Kimlik Bilgisi",
  },
  {
    key: 4,
    text: "Adres Bilgisi",
  },
];

const Timeline = () => {
  const classes = useStyles();

  return (
    <Wrapper>
      <Container>
        <Box
          pb={4}
          pt={2}
          sx={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "row",
          }}
          className={classes.Timeline}
        >
          <Avatar
            alt="Vodafone Logo"
            src={VodafoneLogo}
            className={classes.logo}
          />

          <div>
            <ul className={classes.timelineUl}>
              <hr className={classes.hr} />
              {Timelines.map((item) => (
                <li>
                  <span
                    className={classes.fspan}
                    key={item.key}
                    style={
                      item.key !== 1
                        ? {
                            backgroundColor: "white",
                            border: "1px solid #afafaf",
                            color: "#afafaf",
                          }
                        : {}
                    }
                  >
                    {item.key}
                  </span>
                  <span
                    className={classes.sspan}
                    style={
                      item.key === 1
                        ? {
                            color: "#333333",
                          }
                        : {}
                    }
                  >
                    {item.text}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <Box sx={{ display: "flex", flexDirection: "row" }}>
            <span className={classes.dotted}>- - - - - - -</span>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <img
                src="https://cms.vodafone.com.tr/static/img/content/21-03/31/tick-outline.png"
                className={classes.timelineIcon}
                alt=""
              />
              <span className={classes.sspan}>Tamamlandı</span>
            </Box>
          </Box>
        </Box>
      </Container>
    </Wrapper>
  );
};

export default Timeline;
