import React,{useEffect,useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { Button, Typography } from '@material-ui/core';
import axios from 'axios'
import Chip from '@material-ui/core/Chip';
import Divider from '@material-ui/core/Divider';
const useStyles = makeStyles({
  table: {
    minWidth: 450,
    maxWidth:800
    
    
  },
  tableContainer:{
    marginTop:"2rem",
  
    maxWidth:800
  },
  header:{
    backgroundColor:"#002B5C",
   
  }
});






export default function EditorUI() {
  const classes = useStyles();
  const [editors,setEditors] = useState([])
  const [refresh,setRefresh] = useState(false)
  useEffect(async() =>{
    const response = await axios.get('https://icaff.herokuapp.com/api/admin/get-editor-list')
    console.log(response)
    setEditors(response.data)
  },[refresh])

  const editorRemoveHandler = async(event,id) =>{
    event.preventDefault()
    try {
      const response = await axios.delete('https://icaff.herokuapp.com/api/admin/delete-editor', { data: { id: id } })
      alert('Removed Editor Successfully')
      setRefresh(!refresh)
      
    } catch (error) {
      
    }
  }

  return (
    <React.Fragment>

    <center>
    <Typography variant="h4" style={{marginTop:"1rem",fontWeight:800}}>Editors List</Typography>
    <Divider variant="middle" />
    </center>


    <center><TableContainer component={Paper} className={classes.tableContainer}>
     
      <Table className={classes.table} aria-label="simple table">
        <TableHead className={classes.header}>
          <TableRow>
            <TableCell ></TableCell>
            <TableCell style={{color:"#E1F7FA",fontWeight:800,fontSize:"1rem"}}>Editor Name</TableCell>
            <TableCell style={{color:"#E1F7FA",fontWeight:800,fontSize:"1rem"}}>Editor Email</TableCell>
            <TableCell ></TableCell>
        
          </TableRow>
        </TableHead>
        <TableBody>
          {editors.map((row) => (
            <TableRow key={row._id}>
              <TableCell>
            
              </TableCell>
              <TableCell >{row.name}</TableCell>
              <TableCell >{row.email}</TableCell>
              <TableCell ><Button  style={{backgroundColor:"#b71c1c",color:"#E1F7FA"}} onClick={(event) => editorRemoveHandler(event,row._id)}>Remove</Button> </TableCell>
             
        
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer></center>
    </React.Fragment>

  );
}