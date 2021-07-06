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
import Theme from '../../ui/Theme';

import GetAppIcon from '@material-ui/icons/GetApp';


export default function WorkshopTable() {
  const classes = useStyles();
  const [proposalDetails,setProposalDetails] = useState([])
  const [refresh,setRefresh] = useState(false)

  useEffect(async() =>{
    const response = await axios.get('https://icaff.herokuapp.com/api/workshop/get-workshop-data')

    console.log(response)
    setProposalDetails(response.data)
},[refresh])


  const declineHandler = async(event,id) =>{
    event.preventDefault()
    console.log(id)
    try {
      const response = await axios.delete('https://icaff.herokuapp.com/api/workshop/workshop-delete', { data: { id: id } })
      alert('Declien Workshop Proposal Successfully')
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
      const response = await axios.put(`https://icaff.herokuapp.com/api/workshop/workshop-approve`,data)
      console.log(response)
      alert('Workshop Approved Successfully')
      setRefresh(!refresh)
    } catch (error) {
      alert('Error')
    }
    console.log(id)
  }

  return (
    <TableContainer component={Paper} className={classes.tableContainer}>
      <Table className={classes.table} aria-label="simple table" >
        <TableHead className={classes.header}>
          <TableRow>
            <TableCell></TableCell>
            <TableCell style={{color:"#E1F7FA",fontWeight:800,fontSize:"1rem"}}>Name</TableCell>
            <TableCell style={{color:"#E1F7FA",fontWeight:800,fontSize:"1rem"}}>Title</TableCell>
            <TableCell style={{color:"#E1F7FA",fontWeight:800,fontSize:"1rem"}}>Workshop Document</TableCell>
            <TableCell style={{color:"#E1F7FA",fontWeight:800,fontSize:"1rem"}}>Status</TableCell>
            <TableCell ></TableCell>
            <TableCell ></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {proposalDetails.map((row,index) => (
            <TableRow key={row.name}>
              <TableCell component="th" scope="row">
                {index + 1}
              </TableCell>
              <TableCell >{row.name}</TableCell>
              <TableCell >{row.title}</TableCell>
              <TableCell ><Button variant="outlined" endIcon={<GetAppIcon/>} href={'http://localhost:9090/' + row.document} target="_blank">Download</Button></TableCell>
             
              <TableCell >{row.status}</TableCell>
              <TableCell ><Button variant="contained" style={{backgroundColor:'#b71c1c',color:"#E1F7FA"}} onClick={(event) => declineHandler(event,row._id)}>Decline</Button> <Button variant="contained" color="primary" onClick={(event) => approveHandler(event,row._id)}>Approve</Button> </TableCell>
             
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
      backgroundColor:Theme.palette.common.blue,
     
    }
  });