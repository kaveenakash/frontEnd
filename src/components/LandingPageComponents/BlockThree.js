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

import Slide from "@material-ui/core/Slide";

//Data
import { news } from "../../store/data";

const BlockThree = (props) => {
  const classes = useStyles();

  return (
    <Slide direction="up" in={true} mountOnEnter unmountOnExit timeout={5500}>
      <Grid
        container
        direction="column"
        className={classes.newsContainer}
        alignItems="center"
      >
        <Grid item>
          <center>
            <Typography variant="h4" className={classes.newsHeader}>
              Latest News
            </Typography>
          </center>
          <Divider variant="middle" className={classes.divider} light />
        </Grid>

        <Grid
          item
          container
          direction="column"
          className={classes.newsContentContainer}
        >
          <Grid item container direction="row" justify="center">
            {news.map((item) => {
              return (
                <Grid
                  key={item.id}
                  item
                  xs={12}
                  md={6}
                  lg={4}
                  className={classes.newsRow}
                >
                  <Typography variant="h4" align="center">
                    {item.date}
                  </Typography>
                  <br />
                  <Typography
                    className={classes.newsContent}
                    variant="subtitle1"
                    align="center"
                    
                  >
                    {item.content}
                  </Typography>
                </Grid>
              );
            })}
          </Grid>
        </Grid>
      </Grid>
    </Slide>
  );
};

const useStyles = makeStyles((theme) => ({
  newsContainer: {
    marginTop: "2rem",
    marginBottom: "2rem",
  },
  newsContentContainer: {
    marginTop: "1rem",
  },
  newsHeader: {
    fontFamily: "Raleway",
    fontWeight: 800,
    color: theme.palette.common.blue,
  },
  divider: {
    backgroundColor: theme.palette.common.yellow,
    height: "0.125rem",
  },
  newsContent: {
    marginRight: "3rem",
    marginLeft: "3rem",
    color:theme.palette.common.darkGray
  },
  newsRow: {
    marginTop: "2rem",
  },
}));

export default BlockThree;
