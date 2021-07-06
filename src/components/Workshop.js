import React,{useEffect,useContext,useState} from "react";
import {useHistory} from 'react-router-dom'
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import Divider from "@material-ui/core/Divider";
import Grow from "@material-ui/core/Grow";
import Button from "@material-ui/core/Button";
import Hidden from "@material-ui/core/Hidden";
import { colors } from "@material-ui/core";
import { useMediaQuery } from "@material-ui/core";
import Avatar from "@material-ui/core/Avatar";
import TextField from "@material-ui/core/TextField";
import { Link } from "react-router-dom";
import Chip from "@material-ui/core/Chip";
import AuthContext from "../store/auth-context";
import axios from "axios";
const Workshop = (props) => {
  const classes = useStyles();
  const history = useHistory();

  const [workshops,setWorkshops] = useState([])

  const authCtx = useContext(AuthContext);
  // useEffect(() =>{
  //   if(authCtx.role){
  //       history.replace('')
  //   }
  // },[])

  useEffect(async() =>{
    const response = await axios.get('https://icaff.herokuapp.com/api/workshop/workshop-approved')
    setWorkshops(response.data)

  },[])

  return (
    <React.Fragment>
      <Grid container className={classes.workshopContainer} direction="column">
        <Grid container alignItems="center" direction="column" item>
          <Grid item>
            <Typography
              variant="h4"
              className={classes.workshopHeader}
              align="center"
            >
              WORKSHOPS
            </Typography>
            <Divider variant="middle" className={classes.divider} light />
          </Grid>
        </Grid>
        <Grid
          item
          container
          justify="center"
          className={classes.workshopBodyContainer}
        >
          <Grid item xs={9} className={classes.workshopBodyHeader}>
            <Typography variant="subtitle1">
              Following is the list of workshops, which will be organized as a
              part of ICAF 2021.
            </Typography>
          </Grid>
          <Grid item xs={9}>
            <Typography variant="subtitle1">
              <b>Regsiter</b> via following link :{" "}
              <Link to="/registration/user">Click here</Link>
            </Typography>
          </Grid>
          {workshops.map((workshop,index) => {
            return (
              <Grid
                item
                container
                direction="column"
                xs={9}
                className={classes.workshopContent}
                key={index + workshop._id}
                alignItems="center"
              >
                <Grid item>
                  <Divider
                    variant="fullWidth"
                    light
                    className={classes.workshopDivider}
                  />
                </Grid>

                <Grid item>
                  <Chip label={index + 1} color="primary"></Chip>
                </Grid>

                <Grid item>
                  <Typography
                    align="center"
                    variant="h6"
                    className={classes.workshopProposalHeader}
                    color="primary"
                  >
                    {workshop.title}
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography
                    align="center"
                    variant="subtitle1"
                    className={classes.workshopProposalHeader}
                    color="primary"
                  >
                    Workshop Conductor : {workshop.name}
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography
                    align="center"
                    variant="subtitle1"
                    className={classes.workShopProposal}
                    color="primary"
                  >
                    {workshop.content}
                  </Typography>
                </Grid>
                <Grid item>
                  <center>
                    <Button
                      variant="contained"
                      color="secondary"
                      target="_blank"
                      href={'http://localhost:9090/' + workshop.document}
                    >
                      Download Proposal
                    </Button>
                  </center>
                </Grid>
              </Grid>
            );
          })}
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

const useStyles = makeStyles((theme) => ({
  workshopContainer: {
    marginTop: "6rem",
    marginBottom: "2rem",
  },
  workshopHeader: {
    fontFamily: "Raleway",
    fontWeight: 800,
    color: theme.palette.common.blue,
  },
  divider: {
    backgroundColor: theme.palette.common.yellow,
    height: "0.2rem",
  },
  workshopBodyContainer: {
    marginTop: theme.spacing(8),
  },
  workshopBodyHeader: {
    marginBottom: theme.spacing(3),
  },
  workshopContent: {
    marginTop: theme.spacing(3),
  },
  workshopDivider: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(2),
  },
  workshopProposalHeader: {
    marginBottom: theme.spacing(1),
    fontWeight: 700,
  },
  workShopProposal: {
    marginBottom: theme.spacing(2),
  },
}));

export default Workshop;
