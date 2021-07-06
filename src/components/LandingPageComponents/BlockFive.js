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

import { venueImages } from "../../store/data";

const BlockFive = (props) => {
  const classes = useStyles();

  return (
    <Grid
      container
      item
      alignItems="center"
      direction="column"
      className={classes.venueContainer}
    >
      <Grid item>
        <Typography variant="h4" className={classes.venueHeader} align="center">
          Venue
        </Typography>
        <Divider variant="middle" className={classes.divider} light />
      </Grid>

      <Grid
        item
        direction="column"
        alignItems="center"
        container
        className={classes.imageContainer}
      >
        <Grid item container direction="row" justify="center">
          {venueImages
            .filter((item) => item.id <= 8)
            .map((image) => {
              return (
                <Grid key={image.id} item className={classes.imageItem}>
                  <img className={classes.image} src={image.src} />
                </Grid>
              );
            })}
        </Grid>
      </Grid>
    </Grid>
  );
};

const useStyles = makeStyles((theme) => ({
  venueContainer: {
    marginTop: "2rem",
    marginBottom: "2rem",
  },
  venueHeader: {
    fontFamily: "Raleway",
    fontWeight: 800,
    color: theme.palette.common.blue,
  },
  divider: {
    backgroundColor: theme.palette.common.yellow,
    height: "0.1rem",
  },

  imageContainer: {
    marginTop: "2rem",
  },
  image: {
    width: "22em",
    height: "15em",
  },
  imageItem: {
    marginRight: "3px",
    marginTop: "3px",
  },
}));

export default BlockFive;
