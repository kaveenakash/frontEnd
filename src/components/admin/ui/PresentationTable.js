import React,{useState,useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button'
import axios from 'axios';
import {Link} from 'react-router-dom'
import DeleteOutlineOutlinedIcon from '@material-ui/icons/DeleteOutlineOutlined';
import IconButton from '@material-ui/core/IconButton';
import ThumbUpAltOutlinedIcon from '@material-ui/icons/ThumbUpAltOutlined';
import Chip from '@material-ui/core/Chip';
import GetAppIcon from '@material-ui/icons/GetApp';
export default function PresentationTable() {
  const classes = useStyles();
  const [presentationDetails,setPresentationDetails] = useState([])
  const [refresh,setRefresh] = useState(false)

  useEffect(async() =>{
    const response = await axios.get('https://icaff.herokuapp.com/api/presentation/get-presentation-data')

    console.log(response)
    setPresentationDetails(response.data)
},[refresh])


  const declineHandler = async(event,id) =>{
    event.preventDefault()
    console.log(id)
    try {
      const response = await axios.delete('https://icaff.herokuapp.com/api/presentation/research-paper-delete', { data: { id: id } })
      alert('Declien Research Paper Successfully')
      setRefresh(!refresh)
      
    } catch (error) {
      
    }
  }
  const approveHandler = async(event,id) =>{
    event.preventDefault()

    try {
      const data = {
        id
      }
      const response = await axios.put(`https://icaff.herokuapp.com/api/presentation/research-paper-approve`,data)
      console.log(response)
      alert('Research Paper Approved Successfully')
      setRefresh(!refresh)
    } catch (error) {
      alert('Error')
    }
    console.log(id)
  }

  return (
    <TableContainer component={Paper} className={classes.tableContainer}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead className={classes.header}>
          <TableRow>
            <TableCell></TableCell>
            <TableCell style={{color:"#E1F7FA",fontWeight:800,fontSize:"1rem"}}>Name</TableCell>
            <TableCell style={{color:"#E1F7FA",fontWeight:800,fontSize:"1rem"}}>Title</TableCell>
            <TableCell style={{color:"#E1F7FA",fontWeight:800,fontSize:"1rem"}}>Presentation Document</TableCell>
            <TableCell style={{color:"#E1F7FA",fontWeight:800,fontSize:"1rem"}}>Status</TableCell>
            <TableCell style={{color:"#E1F7FA",fontWeight:800,fontSize:"1rem"}}></TableCell>
            <TableCell style={{color:"#E1F7FA",fontWeight:800,fontSize:"1rem"}}></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {presentationDetails.map((row,index) => (
            <TableRow key={row.name}>
              <TableCell component="th" scope="row">
                {index + 1}
              </TableCell>
              <TableCell >{row.name}</TableCell>
              <TableCell >{row.title}</TableCell>
              <TableCell ><Button startIcon={<GetAppIcon/>} variant="outlined" href={'https://icaff.herokuapp.com/' + row.document} target="_blank">Download</Button></TableCell>
             
              <TableCell > <Chip label={row.status} color="secondary"></Chip></TableCell>
              <TableCell ><IconButton   aria-label="upload picture" component="span" onClick={(event) => declineHandler(event,row._id)}>
          <DeleteOutlineOutlinedIcon style={{color:"#F44336"}}/>
        </IconButton>
        
        <IconButton   aria-label="upload picture" component="span" onClick={(event) => approveHandler(event,row._id)}>
          <ThumbUpAltOutlinedIcon color="primary" />
        </IconButton>
        
        </TableCell> 
       
             
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

const useStyles = makeStyles({
    table: {
      minWidth: 650,
   
    },
    tableContainer:{
        marginTop:'3rem',
        marginLeft:'1rem'

    },
    header:{
      backgroundColor:"#002B5C"
     
    }
    
  });