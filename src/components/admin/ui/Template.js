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
import PictureAsPdfIcon from '@material-ui/icons/PictureAsPdf';

const ResearchPresenterRegistration = () => {
  const [selectedFile, setSelectedFile] = useState();
  const [selectedFileName, setSelectedFileName] = useState();
  const [isFilePicked, setIsFilePicked] = useState(false);
  const history = useHistory()

  const [title, setTitle] = useState("");

  const [content, setContent] = useState("");
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
    console.log('Hello')
   
   
    try {
      const formData = new FormData();
   
      formData.append('title',title);
      formData.append('content',content);
      formData.append('document',selectedFile);
 
      
     console.log(selectedFile)
      const responseData = await axios.post('https://icaff.herokuapp.com/api/downloads/admin-add-template',formData)
      alert('Template Saved Successfully')
     



    } catch (error) {
      alert('Error Occured')
    }


  };

  return (
    <Container component="main" maxWidth="md">
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <PictureAsPdfIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Add Templates
        </Typography>
        <form className={classes.form} onSubmit={(event) => formHandler(event)}Validate>
          <Grid container spacing={2}>
           
         
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                label="Template Name"
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
                label="Template Content"
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
                  Upload Template
                  <input type="file" hidden onChange={fileHandler} accept=".pdf"/>
                </Button>
                {isFilePicked && selectedFileName}
              </center>
            </Grid>
           
          </Grid>

          <Button
            fullWidth
            variant="contained"
            color="primary"
            type="submit"
            className={classes.submit}
           
          >
            Submit
          </Button>
        </form>
      </div>
    </Container>
  );
};

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(3),
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
