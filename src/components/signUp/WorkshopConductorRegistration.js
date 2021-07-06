import React, { useState,useContext } from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import AssignmentIndIcon from "@material-ui/icons/AssignmentInd";
import axios from 'axios'
import AuthContext from "../../store/auth-context";
import { useHistory } from "react-router-dom";

const WorkshopConductorRegistration = () => {
  const [selectedFile, setSelectedFile] = useState();
  const [selectedFileName, setSelectedFileName] = useState();
  const [isFilePicked, setIsFilePicked] = useState(false);
  const classes = useStyles();
  const history = useHistory()
  const[name,setName] = useState('')
  const[email,setEmail] = useState('')
  const[title,setTitle] = useState('')
  const[content,setContent] = useState('')
  const[password,setPassword] = useState('')

  const authCtx = useContext(AuthContext);

  const fileHandler = (event) => {
    setSelectedFile(event.target.files[0]);
    setSelectedFileName(event.target.files[0].name);
    setIsFilePicked(true);
  };

  const workshopFormHandler = async(event) =>{
    event.preventDefault();

    let role = "Workshop-Conductor"

    const formData = new FormData();
      formData.append('name',name);
      formData.append('email',email);
      formData.append('title',title);
      formData.append('content',content);
      formData.append('password',password);
      formData.append('document',selectedFile);
    

    try {
      const  response = await axios.post('https://icaff.herokuapp.com/api/workshop/workshop-signUp',formData)
      console.log(response)
      authCtx.login(response.data.token,response.data.role)
      alert('Your Proposal Still pendiing If it approved we sent email to the your provided email')
      history.replace('/workshops')



    } catch (error) {
      alert('Error Registration Unsuccessful')      
    }
    
  }

  return (
    <Container component="main" maxWidth="md">
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <AssignmentIndIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Workshop Conductor Sign Up
        </Typography>
        <form className={classes.form} onSubmit={(event) => workshopFormHandler(event)}Validate>
          <Grid container spacing={2}>
            <Grid item xs={12} >
              <TextField
                autoComplete="fname"
                name="firstName"
                variant="outlined"
                required
                fullWidth
                label="Full Name"
                autoFocus
                value={name}
                onChange={(event) => setName(event.target.value)}
              />
            </Grid>
        
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                label="Workshop Title"
                
                value={title}
                onChange={(event) => setTitle(event.target.value)}
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                variant="outlined"
                multiline="true"
                rows="5"
                required
                fullWidth
                id="workshop"
                label="Workshop Details"
                value={content}
                onChange={(event) => setContent(event.target.value)}
              />
            </Grid>
            <Grid item>
              <center>
                <Button
                  variant="contained"
                  component="label"
                  color="secondary"
                  size="small"
                >
                  Proposal Upload
                  <input type="file" hidden onChange={fileHandler} accept=".pdf"/>
                </Button>
                {isFilePicked && selectedFileName}
              </center>
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
              />
            </Grid>
          </Grid>

          <Button
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            type="submit"
          >
            Sign Up
          </Button>
        </form>
      </div>
    </Container>
  );
};

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(12),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default WorkshopConductorRegistration;
