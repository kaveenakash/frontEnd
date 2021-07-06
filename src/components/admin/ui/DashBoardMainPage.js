import React,{useEffect,useState} from "react";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Chip from "@material-ui/core/Chip";
import FaceIcon from "@material-ui/icons/Face";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";
import EditIcon from "@material-ui/icons/Edit";
import PresentToAllIcon from "@material-ui/icons/PresentToAll";
import Box from "@material-ui/core/Box";
import LinearProgress from "@material-ui/core/LinearProgress";
import WorkIcon from '@material-ui/icons/Work';
import SlideshowIcon from '@material-ui/icons/Slideshow';
import SystemUpdateAltIcon from '@material-ui/icons/SystemUpdateAlt';
import UserCharts from './UserChars'
import axios from 'axios'
import Divider from '@material-ui/core/Divider';

export default function DashBoardMainPage() {

  const classes = useStyles();
  const [totalPresentationDocuments,setTotalPresentationDocuments] = useState('')
  const [approvedPresentations,setApprovedPresentations] = useState('')
  const [pendingPresentations,setPendingPresentations] = useState('')
  const [totalWorkshopDocuments,setTotalWorkshopDocuments] = useState('')
  const [approvedWorkshops,setApprovedWorkshops] = useState('')
  const [pendingWorkshops,setPendingWorkshops] = useState('')

  const[messages,setMessages] = useState([])

  useEffect(async() => {

   const presentationdata = await axios.get('https://icaff.herokuapp.com/api/presentation/get-total-presentations')
   
    setTotalPresentationDocuments(presentationdata.data.totalDocuments)
    setApprovedPresentations(presentationdata.data.approveDocuments)
    setPendingPresentations(presentationdata.data.pendingDocuments)

    const workshopData = await axios.get('https://icaff.herokuapp.com/api/workshop/get-total-workshops')
    console.log(workshopData)
    setTotalWorkshopDocuments(workshopData.data.totalDocuments)
    setApprovedWorkshops(workshopData.data.approveDocuments)
    setPendingWorkshops(workshopData.data.pendingDocuments)

    const messageData = await axios.get('https://icaff.herokuapp.com/api/message/get-all-messages')
    console.log(messageData)
    setMessages(messageData.data.messages)

  }, [])

  return (
    <Grid direction="column" container>
      <Grid
        item
        container
        justify="space-around"
        className={classes.cardContainer}
      >
        <Grid item xs={3}>
          <Card>
            <CardContent>
              <Grid container direction="column">
                <Grid item container direction="row" justify="space-between">
                  <Grid item direction="column">
                    <Grid item>
                      <Typography variant="h2" className={classes.cardHeader}>
                        Total Presentations
                      </Typography>
                    </Grid>
                    <Grid item style={{marginTop:"0.5rem"}}>
                      <Typography variant="subtitle2">All Presentations - {totalPresentationDocuments}</Typography>
                    <LinearProgress variant="determinate" value={100} style={{color: "#ab003c"}} />
                    </Grid>
                    <Grid item style={{marginTop:"0.8rem"}}>
                      <Typography variant="subtitle2">Approved Presentations - {approvedPresentations}</Typography>
                    <LinearProgress variant="determinate" value={45}  color="primary" style={{color: "#ab003c"}}/>
                    </Grid>
                    <Grid item style={{marginTop:"0.8rem"}}>
                      <Typography variant="subtitle2">Pending Presentations - {pendingPresentations}</Typography>
                    <LinearProgress variant="indeterminate" value={30}  color="secondary"/>
                    </Grid>
                  </Grid>

                  <Grid item>
                    <Fab color="primary" aria-label="add" size="small">
                      <SlideshowIcon />
                    </Fab>
                  </Grid>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>
       
        <Grid item xs={3}>
          <Card>
            <CardContent>
              <Grid container direction="column">
                <Grid item container direction="row" justify="space-between">
                  <Grid item direction="column">
                    <Grid item>
                      <Typography variant="h2" className={classes.cardHeader}>
                        Total Workshops
                      </Typography>
                    </Grid>
                    <Grid item style={{marginTop:"0.5rem"}}>
                      <Typography variant="subtitle2">All Workshops - {totalWorkshopDocuments}</Typography>
                    <LinearProgress variant="determinate" value={100} style={{color: "#ab003c"}} />
                    </Grid>
                    <Grid item style={{marginTop:"0.8rem"}}>
                      <Typography variant="subtitle2">Approved Workshops - {approvedWorkshops}</Typography>
                    <LinearProgress variant="determinate" value={45}  color="primary" style={{color: "#ab003c"}}/>
                    </Grid>
                    <Grid item style={{marginTop:"0.8rem"}}>
                      <Typography variant="subtitle2">Pending Presentations - {pendingWorkshops}</Typography>
                    <LinearProgress variant="indeterminate" value={30}  color="secondary"/>
                    </Grid>
                  </Grid>

                  <Grid item>
                    <Fab color="primary" aria-label="add" size="small">
                      <WorkIcon />
                    </Fab>
                  </Grid>
                </Grid>
              </Grid>
            </CardContent>
       
          </Card>
        </Grid>


        <Grid item xs={3}>
          <Card>
            <CardContent>
              <Grid container direction="column">
                <Grid item container direction="row" justify="space-between">
                  <Grid item direction="column">
                    <Grid item>
                   
                      <Typography variant="h2" className={classes.cardHeader}>
                        Total Templates
                      </Typography>
                    </Grid>
                    <Grid item style={{marginTop:"0.5rem"}}>
                      <Typography variant="subtitle2">Presentation Templates - 1</Typography>
                    <LinearProgress variant="determinate" value={100} style={{color: "#ab003c"}} />
                    </Grid>
                    <Grid item style={{marginTop:"0.8rem"}}>
                      <Typography variant="subtitle2">Workshop Templates - 1</Typography>
                    <LinearProgress variant="determinate" value={100}  color="primary" style={{color: "#ab003c"}}/>
                    </Grid>
                    <Grid item style={{marginTop:"0.8rem"}}>
                     
                    </Grid>
                  </Grid>

                  <Grid item>
                    <Fab color="primary" aria-label="add" size="small">
                      <SystemUpdateAltIcon />
                    </Fab>
                  </Grid>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
      <Grid item container justify="center" xs={12}>
        <Grid item className={classes.userChart} >
        <Divider variant="middle" style={{height:"0.18rem"}}/>
            <UserCharts messages={messages}/>
        </Grid>
      </Grid>
    </Grid>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    height: 140,
    width: 100,
  },
  control: {
    padding: theme.spacing(2),
  },
  header: {
    fontWeight: 800,
  },
  cardContainer: {
    marginTop: "2rem",
  },
  cardHeader: {
    fontFamily: "Roboto, Helvetica, Arial, sans-serif",
    fontSize: "18px",
    fontWeight: 600,
  },
  pendingBar:{
    
    color:theme.palette.common.darkRed
  },
  totalBar:{
    backgroundColor:"#00695f",
    colorPrimary:"#00695f"
  },
  userChart:{
    marginTop:"4rem"
  }
}));


