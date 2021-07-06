import React, { useState, useEffect,useContext } from "react";
import AppBar from "@material-ui/core/AppBar";
import { makeStyles } from "@material-ui/core/styles";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import { Link } from "react-router-dom";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { useTheme } from "@material-ui/core/styles";
import MenuIcon from "@material-ui/icons/Menu";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import IconButton from "@material-ui/core/IconButton";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import VpnKeyIcon from '@material-ui/icons/VpnKey';
//Data
import { routes } from "../../store/data";

const Header = (props) => {
  const {value,setValue} = props
  const classes = useStyles();
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));
 
  const [openDrawer, setOpenDrawer] = useState(false);

  const handleChange = (e, value) => {
    setValue(value);
  };

  useEffect(() => {
    routes.forEach((route) => {
      switch (window.location.pathname) {
        case `${route.link}`:
          if (value !== route.activeIndex) {
            setValue(route.activeIndex);
          }
          break;
        default:
          break;
      }
    });
  }, [value, routes]);

  let loginFunctionButton;

  if(!props.isLoggedIn){
    loginFunctionButton = (
      <Button
              variant="contained"
              size="small"
              color="secondary"
              className={classes.button}
              component={Link}
              to="/signIn"
              onClick={() => setValue(7)}
              startIcon={<VpnKeyIcon/>}
            >
              Sign in
            </Button>
    )
  }else{
    loginFunctionButton = (
      <Button
      variant="contained"
      size="small"
      color="error"
      className={classes.button}
      component={Link}
      to="/signIn"
      onClick={() => props.logout()}
      endIcon={<ExitToAppIcon />}
    >
      Sign Out
    </Button>
    )
  }

  const tabs = (
    <React.Fragment>
      <Tabs
        value={value}
        className={classes.tabContainer}
        onChange={handleChange}
      >
        {routes.map(item => {
          return (
            <Tab
              key={`${item}${item.activeIndex}`}
              className={classes.tab}
              component={Link}
              to={item.link}
              label={item.name}
            />
          );
        })}
      </Tabs>
    </React.Fragment>
  );
  const drawer = (
    <React.Fragment>
      <SwipeableDrawer
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
        onOpen={() => setOpenDrawer(true)}
        classes={{ paper: classes.drawer }}
      >
        {/* remove below line */}
        <div className={classes.toolbarMargin}></div>
        <List disablePadding>
          {routes.map((item) => (
            <ListItem
              onClick={() => {
                setOpenDrawer(false);
                setValue(item.activeIndex);
              }}
              divider
              button
              component={Link}
              to={item.link}
              selected={value === item.activeIndex}
              classes={{selected:classes.drawerItemSelected}}
            >
              <ListItemText
                className={ classes.drawerItem
                }
                disableTypography
              >
                {item.name}
              </ListItemText>
            </ListItem>
          ))}
        </List>
      </SwipeableDrawer>
      <IconButton
        className={classes.drawerIconContainer}
        onClick={() => setOpenDrawer(!openDrawer)}
        disableRipple
      >
        <MenuIcon color="secondary" />
      </IconButton>
    </React.Fragment>
  );

  return (
    <React.Fragment>
      <ElevationScroll>
        <AppBar position="fixed" color="primary" className={classes.appbar}>
          <Toolbar className={classes.toolbar} color="primary">
            <Button size="small" style={{ color: "#00ACC1" }}>
              Subscribe
            </Button>
            <Typography
              component="h2"
              variant="h4"
              color="inherit"
              align="center"
              style={{ fontWeight: 700 }}
              noWrap
              className={classes.toolbarTitle}
            >
              <Button
                component={Link}
                to="/"
                className={classes.logoContainer}
                onClick={() => setValue(0)}
                disableRipple
              >
                <img
                  alt="I C A F"
                  className={classes.logo}
                  src="https://i.ibb.co/7N51p43/logo.png"
                />
              </Button>
            </Typography>

            {loginFunctionButton}
          </Toolbar>
          <Toolbar
            component="nav"
            variant="dense"
            className={classes.toolbarSecondary}
            disableGutters
          >
            {matches ? drawer : tabs}
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <div className={classes.toolbarMargin} />
    </React.Fragment>
  );
};

function ElevationScroll(props) {
  const { children, window } = props;
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

const useStyles = makeStyles((theme) => ({
  toolbar: {
    borderBottom: `1px solid ${theme.palette.divider}`,
  },
  toolbarMargin: {
    ...theme.mixins.toolbar,
    marginBottom: "4em",
    [theme.breakpoints.down("md")]: {
      marginBottom: "3em",
    },
    [theme.breakpoints.down("xs")]: {
      marginBottom: "2.6em",
    },
  },
  toolbarTitle: {
    flex: 1,
  },
  toolbarSecondary: {
    justifyContent: "center",

    overflowX: "auto",
  },
  toolbarLink: {
    padding: theme.spacing(1),
    flexShrink: 0,
  },
  tabContainer: {},
  tab: {
    ...theme.typography.tab,
  },
  button: {
    fontFamily: "Raleway",
    textTransform: "none",
    fontWeight: 600,
  },
  logo: {
    height: "6em",
    [theme.breakpoints.down("md")]: {
      height: "5em",
    },
    [theme.breakpoints.down("xs")]: {
      height: "3em",
    },
  },
  logoContainer: {
    padding: 0,
    "&:hover": {
      backgroundColor: "transparent",
    },
  },
  drawerIconContainer: {
    marginLeft: "auto",
    "&:hover": {
      backgroundColor: "transparent",
    },
  },
  drawer: {
    backgroundColor: theme.palette.common.blue,
  },
  drawerItem: {
    ...theme.typography.tab,
    color: "white",
    opacity: 0.7,
  },
  drawerItemSelected: {
    opacity: 1,
    "& .MuiListItemText-root":{
      opacity:1
    }
  },
  appbar:{
    //remove below line only effect drawer
    zIndex:theme.zIndex.modal + 1
  }
}));

export default Header;
