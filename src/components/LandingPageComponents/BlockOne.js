import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import Grow from "@material-ui/core/Grow";
import Button from "@material-ui/core/Button";
import Hidden from "@material-ui/core/Hidden";


const BlockOne = props =>{
    const classes = useStyles()
    return(
        <Grid item container>
          <img
            src="https://i.ibb.co/v3FFDkJ/Landing-Image.jpg"
            alt="intro-bg"
            border="0"
            className={classes.landingPageImage}
          />
          <Grid
            item
            container
            className={classes.detailHeader}
            direction="column"
            alignItems="center"
          >
            <Grid item>
              <Hidden smDown>
                <Paper elevation={8} style={{ backgroundColor: "transparent" }}>
                  <Typography variant="h1" className={classes.headerTitle}>
                    ICAF 2021
                  </Typography>
                </Paper>
              </Hidden>
            </Grid>
            <Grid item>
              <center>
                <Typography variant="h5" className={classes.subHeaderTitle}>
                  ICAF Application Framework Online Conference
                </Typography>
              </center>
            </Grid>
            {/* ======================Date List  ===================  */}
            <Grid item container direction="row" justify="center">
              <Grid item>
                <Hidden smDown>
                  <Grow
                    in={true}
                    style={{ transformOrigin: "0 0 0" }}
                    timeout={5500}
                  >
                    <Paper elevation={24} className={classes.datePaper}>
                      24th
                    </Paper>
                  </Grow>
                </Hidden>
              </Grid>
              <Grid item>
                <Grow
                  in={true}
                  style={{ transformOrigin: "0 0 0" }}
                  timeout={5500}
                >
                  <Paper className={classes.datePaper}>
                    <Typography variant="h5" className={classes.dates}>
                      MAINT EVENT
                      <br />
                      <center>July 25th</center>
                    </Typography>
                  </Paper>
                </Grow>
              </Grid>
              <Grid item>
                <Hidden smDown>
                  <Grow
                    in={true}
                    style={{ transformOrigin: "0 0 0" }}
                    timeout={5500}
                  >
                    <Paper className={classes.datePaper}>27th</Paper>
                  </Grow>
                </Hidden>
              </Grid>
            </Grid>
            <Grid item>
              <Button
                variant="outlined"
                color="secondary"
                size="large"
                className={classes.learnMoreButton}
              >
                Learn More
              </Button>
            </Grid>
            <Grid item>
              <center>
                <Typography
                  variant="subtitle1"
                  className={classes.subHeaderTwo}
                >
                  Sri Lanka Institute Of Information Technology, Srilanka
                </Typography>
              </center>
            </Grid>
          </Grid>
        </Grid>
    )

}

const useStyles = makeStyles((theme) => ({
    landingPageImage: {
      [theme.breakpoints.down("lg")]: {
        height: "40.5em",
      },
      [theme.breakpoints.down("md")]: {
        height: "41.5em",
      },
      [theme.breakpoints.down("xl")]: {
        height: "52.5em",
      },
  
      width: "100%",
    },
    detailHeader: {
      position: "absolute",
      marginTop: "6em",
    },
    headerTitle: {
      fontFamily: "YELLOWTAIL",
      fontSize: "6rem",
      fontWeight: "700",
      color: "white",
    },
    subHeaderTitle: {
      fontSize: "1.9rem",
      fontWeight: "100",
      color: "white",
      marginTop: "1.7rem",
    },
    datePaper: {
      backgroundColor: theme.palette.common.yellow,
      padding: "2rem",
      marginLeft: "0.8rem",
      marginTop: "1rem",
    },
    dates: {
      fontWeight: 800,
    },
    learnMoreButton: {
      marginTop: "2.5rem",
    },
    subHeaderTwo: {
      color: "white",
      marginTop: "2rem",
    },
  }));
export default BlockOne