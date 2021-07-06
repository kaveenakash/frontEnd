import React from "react";
import {Link} from 'react-router-dom'
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Hidden from '@material-ui/core/Hidden'
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import Icon from "@material-ui/core/Icon";

const Footer = (props) => {
   const classes = useStyles();
    const {value,setValue} = props
   return (
    <footer className={classes.footer}>
        <Hidden mdDown>
      <Grid container justify="center" className={classes.mainContainer}>
        <Grid item className={classes.gridItem}> 
          <Grid container direction="column" spacing={2}>
            <Grid item className={classes.link} component={Link} to="/" onClick={() => setValue(!value)}> 
              Home
            </Grid>
          </Grid>
        </Grid>
        <Grid item className={classes.gridItem}>
          <Grid container direction="column" spacing={2}>
              <Grid item className={classes.link} component={Link} to="/downloads" onClick={() => setValue(!value)}>
                  Downloads
              </Grid>
              <Grid item className={classes.link} component={Link} to="/" onClick={() => setValue(!value)}>
                  Services
              </Grid>
              <Grid item className={classes.link} component={Link} to="/" onClick={() => setValue(!value)}>
                  Services
              </Grid>
          </Grid>
        </Grid>
        <Grid item className={classes.gridItem}>
            <Grid container direction="column" spacing={2}>
                <Grid item className={classes.link} component={Link} to="/keynotes" onClick={() => setValue(!value)}>
                    Keynotes
                </Grid>
                <Grid item className={classes.link} component={Link} to="/precentations" onClick={() => setValue(!value)}>
                    Research Paper Precentations
                </Grid>
                
            </Grid>
        </Grid>
        <Grid item className={classes.gridItem}>
            <Grid container direction="column" spacing={3}>
                <Grid item className={classes.link} component={Link} to="/contact-us" onClick={() => setValue(!value)}>
                    Contact Us
                </Grid>
            </Grid>
        </Grid>

      </Grid>
      </Hidden>
      <Button
        component={Link}
        to="/"
        disableRipple
        className={classes.footerLogoContainer}
        onClick={() => setValue(0)}
      >

        
      <img
        alt="I C A F"
        className={classes.adornment}
        src="https://i.ibb.co/7N51p43/logo.png"

      />
      </Button>
      <Grid container className={classes.socialContainer} justify="flex-end" spacing={2}>
          <Grid item component={"a"} href="http://www.facebook.com" rel="noopener noreferrer" target="_blank">
              <FacebookIcon className={classes.icon}/>
          </Grid>
          <Grid item component={"a"} href="http://www.twitter.com" rel="noopener noreferrer" target="_blank">
              <TwitterIcon className={classes.icon}/>
          </Grid>
          <Grid item component={"a"} href="http://www.linkedin.com" rel="noopener noreferrer" target="_blank"> 
              <LinkedInIcon className={classes.icon}/>
          </Grid>
      </Grid>
    </footer>
  );
};

const useStyles = makeStyles((theme) => ({
  footer: {
    backgroundColor: theme.palette.common.blue,
    width: "100%",
    //Can Remove Only Effect drawer
    zIndex: 1302,
    position: "relative",
  },
  adornment: {
    width: "22em",
    
    verticalAlign: "bottom",
    [theme.breakpoints.down("md")]: {
      width: "18em",
    },
    [theme.breakpoints.down("xs")]: {
      width: "10em",
    },
  },
  mainContainer: {
    position: "absolute",
  },
  link: {
    color: "white",
    fontFamily: "raleway",
    fontSize: "0.75rem",
    fontWeight: "bold",
    textDecoration:"none",
    "&:hover":{
        color:theme.palette.common.yellow
    }
  },
  gridItem:{
      margin:"1.5em"
  },
  footerLogoContainer:{
    "&:hover": {
        backgroundColor:  theme.palette.common.yellow,
      },
  },
  icon:{
      height:"1.5em",
      width:"1.5em",
      color:"white",
      "&:hover":{
          color:theme.palette.common.yellow
      }
  },
  socialContainer:{
      position:"absolute",
      marginTop:"-4em",
      right:"1.5em"
  }
}));

export default Footer;
