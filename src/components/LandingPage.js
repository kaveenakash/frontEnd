import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import Grow from "@material-ui/core/Grow";
import Button from "@material-ui/core/Button";
import Hidden from "@material-ui/core/Hidden";
import BlockOne from "./LandingPageComponents/BlockOne";
import BlockTwo from "./LandingPageComponents/BlockTwo";
import BlockThree from "./LandingPageComponents/BlockThree";
import BlockFour from './LandingPageComponents/BlockFour'
import BlockFive from "./LandingPageComponents/BlockFive";
const LandingPage = (props) => {
  

  return (
    <div>
      <Grid container direction="column">
        {/* first Block */}
        <BlockOne/>
        {/* About Block */}
          <BlockTwo/>
          {/* Lates News Block */}
          <BlockThree/>
          {/* Keynote Speakers */}
          <BlockFour/>
          {/* Organize Block */}
          <BlockFive/>
      </Grid>
    </div>
  );
};



export default LandingPage;
