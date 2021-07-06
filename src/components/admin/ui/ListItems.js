import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import DashboardIcon from '@material-ui/icons/Dashboard';
import EditIcon from '@material-ui/icons/Edit';
import {Link} from 'react-router-dom'
import HowToVoteIcon from '@material-ui/icons/HowToVote';
import ListAltIcon from '@material-ui/icons/ListAlt';
import AssignmentIcon from '@material-ui/icons/Assignment';
import PresentToAllIcon from '@material-ui/icons/PresentToAll';
import PictureAsPdfIcon from '@material-ui/icons/PictureAsPdf';


export const mainListItems = (
  <div>
    <ListItem button  component={Link} to="/" >
      <ListItemIcon>
        <DashboardIcon />
      </ListItemIcon>
      <ListItemText primary="Dashboard" />
    </ListItem>
    <ListItem button component={Link} to="/admin-workshop" >
      <ListItemIcon>
        <HowToVoteIcon />
      </ListItemIcon>
      <ListItemText primary="Workshop-Details" />
    </ListItem>
    <ListItem button component={Link} to="/admin-presentation">
      <ListItemIcon>
        <PresentToAllIcon />
      </ListItemIcon>
      <ListItemText primary="Presentation-Details" />
    </ListItem>
    <ListItem button component={Link} to="/admin-templates">
      <ListItemIcon>
        <PictureAsPdfIcon />
      </ListItemIcon>
      <ListItemText primary="Templates" />
    </ListItem>

   
  </div>
);

// Additional Items For Admin
export const secondaryListItems = (
  <div>
    <ListSubheader inset>Extra Settings</ListSubheader>
    <ListItem button component={Link} to="/add-editor">
      <ListItemIcon>
        <EditIcon />
      </ListItemIcon>
      <ListItemText primary="Add Editor" />
    </ListItem>
    <ListItem button component={Link} to="/admin-editor">
      <ListItemIcon>
        <ListAltIcon />
      </ListItemIcon>
      <ListItemText primary="Editor List" />
    </ListItem>
    
  </div>
);
