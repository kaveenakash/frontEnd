import React,{useEffect,useContext,useState} from "react";
import {useHistory} from 'react-router-dom'
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import Button from "@material-ui/core/Button";
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import axios from 'axios'

const Presentation = (props) => {
  const classes = useStyles();
  const history = useHistory();
  const bull = <span className={classes.bullet}>•</span>;
  const [researchPaperDetails,setResearchPaperDetails] = useState([])

  useEffect(async() =>{
    try {
      const response = await axios.get('https://icaff.herokuapp.com/api/presentation/research-paper-approved')
      setResearchPaperDetails(response.data)
      console.log(response.data)
    } catch (error) {
      
    }
  },[])

  return (
    <React.Fragment>
      <Grid container className={classes.presentationContainer} direction="column" >
        <Grid container alignItems="center" direction="column" item>
          <Grid item>
            <Typography
              variant="h4"
              className={classes.presentationHeader}
              align="center"
            >
              PRESENTATION
            </Typography>
            <Divider variant="middle" className={classes.divider} light />
          </Grid>
        </Grid>
      {
        researchPaperDetails.map((item,index) =>{

          return(
            <Grid
            item
            container
            justify="center"
            className={classes.presentationBodyContainer}
            xs={10}
          >   
         <Card className={classes.root} variant="outlined" >
            <CardContent>
              <Typography className={classes.title} color="textSecondary" gutterBottom>
                  Research Paper
              </Typography>
              <Typography variant="h5" component="h2" className={classes.pos} >
                {bull}{item.title}
              </Typography>
          
              <Typography variant="body2" component="p">
            
                {item.content}
              </Typography>
            </CardContent>
            <CardActions>
            <Button 
            
            size="small"
                variant="contained"
                color="secondary"
                target="_blank"
                href={'http://localhost:9090/' +item.document}
                >
                 Download Presentation
              </Button>
            </CardActions>
          </Card>
  
          </Grid>
          )
        })
      }

        
      </Grid>
    </React.Fragment>
  );
};

const useStyles = makeStyles((theme) => ({
  presentationContainer: {
    marginTop: "6rem",
    marginBottom: "2rem",
  },
  presentationHeader: {
    fontFamily: "Raleway",
    fontWeight: 800,
    color: theme.palette.common.blue,
  },
  divider: {
    backgroundColor: theme.palette.common.yellow,
    height: "0.2rem",
  },
  presentationBodyContainer: {
    marginTop: theme.spacing(8),
    marginLeft:"7rem"
  },
  workshopContent: {
    marginTop: theme.spacing(3),
  },
  root: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  
}));

export default Presentation ;
