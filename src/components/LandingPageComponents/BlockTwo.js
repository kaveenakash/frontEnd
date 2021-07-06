import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import Divider from "@material-ui/core/Divider";
import Grow from "@material-ui/core/Grow";
import Button from "@material-ui/core/Button";
import Hidden from "@material-ui/core/Hidden";
import { colors } from "@material-ui/core";
import { aboutDetailsOne, aboutDetailsTwo } from "../../store/data";
import { useMediaQuery } from "@material-ui/core";

const BlockTwo = (props) => {
  const classes = useStyles();
//   Using Media Queries 
  const isSmallScreen = useMediaQuery((theme) => theme.breakpoints.down("xs"));
  const buttonProps = {
    size: isSmallScreen ? "small" : "large",
  };
  return (
    <Grid
      item
      container
      direction="column"
      alignItems="center"
      className={classes.aboutContainer}
    >
      <Grid item>
        <center>
          <Typography variant="h4" className={classes.aboutHeader}>
            About Our Conference
          </Typography>
        </center>

        <Divider variant="middle" className={classes.divider} light />
      </Grid>

      <Grid item className={classes.aboutContentContainer}>
        <center>
          {" "}
          <Paper className={classes.aboutContent} elevation={0}>
            {" "}
            <Hidden smDown>
              <Typography variant="subtitle1">{aboutDetailsOne}</Typography>
            </Hidden>
            <br />
            <Typography variant="subtitle1">{aboutDetailsTwo}</Typography>
          </Paper>
        </center>
      </Grid>
      <Grid item>
        <Button
          {...buttonProps}
          color="secondary"
          variant="contained"
          className={classes.moreInfoButton}
        >
          More Info
        </Button>
      </Grid>
    </Grid>
  );
};

const useStyles = makeStyles((theme) => ({
  aboutContainer: {
    marginTop: "2rem",
    marginBottom: "2rem",
  },
  aboutHeader: {
    fontFamily: "Raleway",
    fontWeight: 800,
    color: theme.palette.common.blue,
  },
  aboutContent: {
    width: "60%",
    color:theme.palette.common.darkGray
  },
  divider: {
    backgroundColor: theme.palette.common.yellow,
    height: "0.1rem",
  },
  aboutContentContainer: {
    marginTop: "1rem",
  },
  moreInfoButton: {
    marginTop: "1rem",
    borderRadius: 10,
    fontWeight: 600,
  },
}));

export default BlockTwo;
