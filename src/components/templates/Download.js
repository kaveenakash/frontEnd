import React, { useState,useEffect } from "react";
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
import axios from "axios";
import { useHistory } from "react-router-dom";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import PictureAsPdfIcon from "@material-ui/icons/PictureAsPdf";
import Icon from "@material-ui/core/Icon";


const Download = (props) => {
  const classes = useStyles();

  const history = useHistory();

  const [templateData,setTemplateData] = useState([])

  useEffect(async() =>{

    try {
        
        const responseData = await axios.get('https://icaff.herokuapp.com/api/downloads/all-templates')
        console.log(responseData.data.data)
        setTemplateData(responseData.data.data)
    } catch (error) {
        
    }
  },[])    


  return (
    <React.Fragment>
      <Grid container className={classes.contactContainer} direction="column">
        <Grid container alignItems="center" direction="column" item>
          <Grid item style={{ marginBottom: "4rem" }}>
            <Typography
              variant="h4"
              className={classes.contactHeader}
              align="center"
            >
              DOWNLOADS
            </Typography>
            <Divider variant="middle" className={classes.divider} light />
          </Grid>
        </Grid>

        <Grid item container justify="space-around" >
            <Grid item style={{marginBottom:"1rem"}} container justify="center">


           {templateData.map((item,index) =>{

               return(
                <Grid item style={{marginRight:"2rem",marginBottom:"1rem"}}>
                <Card className={classes.root}>
            <CardActionArea>
              <CardMedia
                className={classes.media}
                image={
                  
                    "https://i.ibb.co/grshdGQ/1200x630wa-removebg-preview.png"
                }
              ></CardMedia>

              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  {item.title}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  {item.content}
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button size="small" color="secondary" variant="contained" href={'http://localhost:9090/' + item.document} target="_blank">
                Download
              </Button>
            </CardActions>
          </Card>
                </Grid>
               )
           })}

                
               

         

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
  root: {
    maxWidth: 345,
    backgroundColor:"#E0E0E0"
  },
  media: {
    height: "15em",
  },
}));

export default Download;
