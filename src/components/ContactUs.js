import React,{useState} from "react";
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
import axios from 'axios'
import { useHistory } from "react-router-dom";

const ContactUs = (props) => {
  const classes = useStyles();

  const [name,setName] = useState('')
  const [email,setEmail] = useState('')
  const [subject,setSubject] = useState('')
  const [message,setMessage] = useState('')
  const history = useHistory()
  const messageHandler = async(event) =>{
    event.preventDefault()
    const data = {
      name,
      email,
      subject,
      message
    }
    console.log(data)
    try {
     const response = await axios.post('http://localhost:9090/api/message/message-save',data)
      console.log(response)
      alert('Message Sent we will reply to your email')
      history.replace('/')
    } catch (error) {
      alert('Message sent failed')     
    }
  }

  return (
    <React.Fragment>
      <Grid container className={classes.contactContainer} direction="column">
        <Grid container alignItems="center" direction="column" item>
          <Grid item>
            <Typography
              variant="h4"
              className={classes.contactHeader}
              align="center"
            >
              CONTACT US
            </Typography>
            <Divider variant="middle" className={classes.divider} light />
          </Grid>
        </Grid>
        <Grid
          item
          container
          justify="space-evenly"
          className={classes.contactDetailsContainer}
        >
            <Grid item xs={12} sm={4}>
            <Typography
              variant="h6"
              align="center"
              className={classes.contactSubHeader}
            >
              PHONE NUMBER
            </Typography>
            <Typography
              className={classes.contactContent}
              variant="subtitle1"
              align="center"
            >
              +94 11 754 4801
            </Typography>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography
              variant="h6"
              align="center"
              className={classes.contactSubHeader}
            >
              ADDRESS
            </Typography>
            <Typography
              className={classes.contactContent}
              variant="subtitle1"
              align="center"
            >
              SLIIT Malabe Campus, <br />
              New Kandy Rd, Malabe 10115
            </Typography>
          </Grid>
        
          <Grid item xs={12} sm={4}>
            <Typography
              variant="h6"
              align="center"
              className={classes.contactSubHeader}
            >
              EMAIL
            </Typography>
            <Typography
              className={classes.contactContent}
              variant="subtitle1"
              align="center"
            >
              info@sliit.lk
            </Typography>
          </Grid>
        </Grid>

        <Grid item container className={classes.messageContainer}>
          <Grid item container direction="row" justify="center">
            <Grid item xs={4}>
              <TextField
                fullWidth="true"
                id="standard-basic"
                label="Name"
                variant="outlined"
                value={name}
                onChange={(event) => setName(event.target.value)}
              />
            </Grid>
            <Grid item xs={4}>
              <TextField
                fullWidth="true"
                id="standard-basic"
                label="Email"
                variant="outlined"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
              />
            </Grid>
          </Grid>

          <Grid item container justify="center">
            <Grid item xs={8}>
              <br />
              <TextField
                fullWidth="true"
                id="standard-basic"
                label="Subject"
                variant="outlined"
                value={subject}
                onChange={(event) => setSubject(event.target.value)}
              />
            </Grid>
          </Grid>
          <Grid item container justify="center">
            <Grid item xs={8}>
              <br />
              <TextField
                multiline="true"
                rows="5"
                fullWidth="true"
                id="standard-basic"
                label="Message"
                variant="outlined"
                value={message}
                onChange={(event) => setMessage(event.target.value)}
              />
            </Grid>
          </Grid>
          <br />
          <Grid item container justify="center">
            <Grid item>
              <br />
              <Button variant="contained" color="secondary" size="large" onClick={(event) => messageHandler(event)}>
                Send Message
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

const useStyles = makeStyles((theme) => ({
  contactContainer: {
    marginTop: "6rem",
    marginBottom: "2rem",
  },
  contactHeader: {
    fontFamily: "Raleway",
    fontWeight: 800,
    color: theme.palette.common.blue,
  },
  divider: {
    backgroundColor: theme.palette.common.yellow,
    height: "0.2rem",
  },
  contactDetailsContainer: {
    marginTop: "4rem",
  },
  contactSubHeader: {
    fontFamily: "Raleway",
    fontWeight: 700,
    color: theme.palette.common.blue,
  },
  contactContent: {
    color: theme.palette.common.blue,
  },
  messageContainer: {
    marginTop: "3rem",
  },
}));

export default ContactUs;
