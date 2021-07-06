import React, { useState ,useEffect } from "react";
import {useHistory} from 'react-router-dom'
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

const ResearchPresenterRegistration = () => {
  const [selectedFile, setSelectedFile] = useState();
  const [selectedFileName, setSelectedFileName] = useState();
  const [isFilePicked, setIsFilePicked] = useState(false);
  const history = useHistory()

  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [title, setTitle] = useState("");
  const [email, setEmail] = useState("");
  const [content, setContent] = useState("");
  const [password, setPassword] = useState("");
  const [previewUrl,setPreviewUrl] = useState();
  const classes = useStyles();

 

  const fileHandler = (event) => {
   
    if(event.target.files && event.target.files.length === 1){

      setSelectedFile(event.target.files[0]);
      setSelectedFileName(event.target.files[0].name);
      setIsFilePicked(true);
      
    }else {

      setIsFilePicked(false)
    }
  };

  const formHandler = async(event) => {
    event.preventDefault();
    
   
    const role = 'researcher'
    try {
      const formData = new FormData();
      formData.append('fname',fname);
      formData.append('lname',lname);
      formData.append('title',title);
      formData.append('content',content);
      formData.append('email',email);
      formData.append('password',password);
      formData.append('document',selectedFile);
      formData.append('role',role);
      
     console.log(selectedFile)
      const responseData = await axios.post('https://icaff.herokuapp.com/api/presentation/presentation-signUp',formData)
      console.log(responseData)
      alert('Registration Complete Your Research Paper Still in pending process if it approved we sent email to provided email thank you')
      history.replace('/presentations')




    } catch (error) {
      
    }


  };

  return (
    <Container component="main" maxWidth="md">
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <AssignmentIndIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Research Presenter Sign Up
        </Typography>
        <form className={classes.form} onSubmit={(event) => formHandler(event)}Validate>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="fname"
                name="firstName"
                variant="outlined"
                required
                fullWidth
                id="firstName"
                label="First Name"
                autoFocus
                value={fname}
                onChange={(event) => setFname(event.target.value)}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="lastName"
                label="Last Name"
                name="lastName"
                autoComplete="lname"
                value={lname}
                onChange={(event) => setLname(event.target.value)}
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
                type="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                label="Title"
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
                label="Research Presentation content"
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
                  Upload Presentation
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
            type="submit"
            className={classes.submit}
           
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

export default ResearchPresenterRegistration;
