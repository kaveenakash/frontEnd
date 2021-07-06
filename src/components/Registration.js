import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import Grow from "@material-ui/core/Grow";
import Button from "@material-ui/core/Button";
import Hidden from "@material-ui/core/Hidden";
import { useMediaQuery } from "@material-ui/core";
import ListItem from "@material-ui/core/ListItem";
import List from "@material-ui/core/List";
import LabelIcon from "@material-ui/icons/Label";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import { Link } from "react-router-dom";

import { registrationRules } from "../store/data";

const Registration = (props) => {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Grid
        container
        className={classes.registrationContainer}
        direction="column"
      >
        <Grid container alignItems="center" direction="column" item>
          <Grid item>
            <Typography
              variant="h4"
              className={classes.registrationHeader}
              align="center"
            >
              REGISTRATION
            </Typography>
            <Divider variant="middle" className={classes.divider} light />
          </Grid>
        </Grid>

        <Grid item container direction="column">
          <Grid item className={classes.registrationDetails}>
            <br />
            <br />
            <List disablePadding>
              {registrationRules
                .filter((item) => item.id <= 7)
                .map((rule) => {
                  return (
                    <ListItem key={rule.id}>
                      <ListItemIcon disablePadding>
                        <LabelIcon color="primary" />
                      </ListItemIcon>
                      <ListItemText disablePadding>{rule.content}</ListItemText>
                    </ListItem>
                  );
                })}
            </List>
          </Grid>
        </Grid>

        <Grid item container direction="row" justify="center" >
          <Grid item>

        <Button variant="contained" color="secondary" className={classes.registerButton} component={Link} to="/registration/research-presenter">
          Researcher Registration
        </Button>
          </Grid>
          <Grid item>

        <Button variant="contained" color="secondary" className={classes.registerButton} component={Link} to="registration/workshop-conductor">
         Workshop Conductor Registration
        </Button>
          </Grid>
          <Grid item>

        <Button variant="contained" color="secondary" className={classes.registerButton} component={Link} to="registration/user">
          User Registration   
        </Button>
          </Grid>
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

const useStyles = makeStyles((theme) => ({
  registrationContainer: {
    marginTop: "6rem",
    marginBottom: "2rem",
  },
  registrationHeader: {
    fontFamily: "Raleway",
    fontWeight: 800,
    color: theme.palette.common.blue,
  },
  divider: {
    backgroundColor: theme.palette.common.yellow,
    height: "0.2rem",
  },
  registrationDetails: {
    [theme.breakpoints.down("xl")]: {
      marginLeft: theme.spacing(19),
    },
    [theme.breakpoints.down("lg")]: {
      marginLeft: theme.spacing(18),
    },
    [theme.breakpoints.down("md")]: {
      marginLeft: theme.spacing(12),
    },

    [theme.breakpoints.down("sm")]: {
      marginLeft: theme.spacing(5),
    },
    [theme.breakpoints.down("xs")]: {
      marginLeft: theme.spacing(0),
    },
    marginBottom:theme.spacing(2)
  },
  registerButton:{
    marginLeft:theme.spacing(2),
    fontWeight:600
  }
}));
export default Registration;
