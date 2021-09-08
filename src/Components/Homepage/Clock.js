import React, { useEffect, useState } from "react";
import Box from "@material-ui/core/Box";
/* Styles */
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  clockTime: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    margin: "2rem",
  },
  fspanClock: {
    fontSize: "56px",
    fontFamily: "VodafoneFont, sans-serif",
    color: "#fff",
  },
  sspanClock: {
    fontSize: "28px",
    fontFamily: "VodafoneFont, sans-serif",
    color: "#fff",
  },
});

const Clock = ({ deadline }) => {
  const classes = useStyles();

  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  const leading0 = (num) => {
    return num < 10 ? "0" + num : num;
  };

  const getTimeUntil = (deadline) => {
    const time = Date.parse(deadline) - Date.parse(new Date());
    if (time < 0) {
      setDays(0);
      setHours(0);
      setMinutes(0);
      setSeconds(0);
    } else {
      setDays(Math.floor(time / (1000 * 60 * 60 * 24)));
      setHours(Math.floor((time / (1000 * 60 * 60)) % 24));
      setMinutes(Math.floor((time / 1000 / 60) % 60));
      setSeconds(Math.floor((time / 1000) % 60));
    }
  };

  useEffect(() => {
    setInterval(() => getTimeUntil(deadline), 1000);

    return () => getTimeUntil(deadline);
  }, [deadline]);

  return (
    <Box
      sx={{ display: "flex", justifyContent: "center", flexDirection: "row" }}
    >
      <div className={classes.clockTime}>
        <span className={classes.fspanClock}>{leading0(days)}</span>
        <span className={classes.sspanClock}>gün</span>
      </div>
      <div className={classes.clockTime}>
        <span className={classes.fspanClock}>{leading0(hours)}</span>
        <span className={classes.sspanClock}>saat</span>
      </div>
      <div className={classes.clockTime}>
        <span className={classes.fspanClock}>{leading0(minutes)}</span>{" "}
        <span className={classes.sspanClock}>dakika</span>
      </div>
      <div className={classes.clockTime}>
        <span className={classes.fspanClock}>{leading0(seconds)}</span>{" "}
        <span className={classes.sspanClock}>saniye</span>
      </div>
    </Box>
  );
};

export default Clock;
