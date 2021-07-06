import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import Divider from "@material-ui/core/Divider";
import Grow from "@material-ui/core/Grow";
import Button from "@material-ui/core/Button";
import Hidden from "@material-ui/core/Hidden";
import { colors } from "@material-ui/core";
import { aboutDetailsOne, aboutDetailsTwo } from "../../store/data";
import { useMediaQuery } from "@material-ui/core";
import Avatar from "@material-ui/core/Avatar";
const BlockFour = () => {
  const classes = useStyles();
  return (
    <Hidden smDown>
      <Grid
        item
        container
        className={classes.keynoteContainer}
        direction="column"
        alignItems="center"
      >
        <Grid item className={classes.keynoteHeaderItem}>
          <Typography
            variant="h4"
            className={classes.keynoteHeader}
            align="center"
          >
            Keynote Speakers
          </Typography>
        </Grid>
        <Grid item container direction="row" justify="space-evenly">
          <Grid item>
            <Avatar
              alt="Remy Sharp"
              src="https://media-exp1.licdn.com/dms/image/C4D03AQHtfNv_gn6PRw/profile-displayphoto-shrink_200_200/0/1608202942039?e=1627516800&v=beta&t=QtcONe8ywhm4DN-mSdg0ySngcqiQxT3f__ntg2SVrUU"
              className={classes.avatarLarge}
            />

            <Typography
              variant="h6"
              align="center"
              className={classes.speakersHeader}
            >
              Kaveen Akash
            </Typography>

            <Typography
              variant="subtitle2"
              align="center"
              className={classes.speakersSubHeader}
            >
              Department of System Engineering, Faculty of Science <br />
              and Technology, Keio University
            </Typography>
          </Grid>
          <Grid item>
            <Avatar
              alt="Remy Sharp"
              src="https://i.ibb.co/s5yFRjX/Whats-App-Image-2021-05-26-at-19-04-57.jpg"
              className={classes.avatarSmall}
            />
            <Typography
              variant="h6"
              align="center"
              className={classes.speakersHeader}
            >
              Lumini Nanayakkara
            </Typography>

            <Typography
              variant="subtitle2"
              align="center"
              className={classes.speakersSubHeader}
            >
              Department of System Engineering, Faculty of Science <br />
              and Technology, Keio University
            </Typography>
          </Grid>
          <Grid item>
            <Avatar
              alt="Remy Sharp"
              src="https://i.ibb.co/4pDS9HC/IMG-20210706-WA0002.jpg"
              className={classes.avatarLarge}
            />
         
            <Typography
              variant="h6"
              align="center"
              className={classes.speakersHeader}
            >
              Thushan Walimuni
            </Typography>

            <Typography
              variant="subtitle2"
              align="center"
              className={classes.speakersSubHeader}
            >
              Department of System Engineering, Faculty of Science <br />
              and Technology, Keio University
            </Typography>
          </Grid>
        </Grid>
        <Grid item>
    
          <Avatar alt="Remy Sharp" src="https://i.ibb.co/HqBtcb1/IMG-20210706-WA0001.jpg" className={classes.avatarSmall} />
          <Typography
            variant="h6"
            align="center"
            className={classes.speakersHeader}
          >
            Hariscumar
          </Typography>

          <Typography
            variant="subtitle2"
            align="center"
            className={classes.speakersSubHeader}
          >
            Department of System Engineering, Faculty of Science <br />
            and Technology, Keio University
          </Typography>
        </Grid>
      </Grid>
    </Hidden>
  );
};

const useStyles = makeStyles((theme) => ({
  keynoteContainer: {
    backgroundColor: theme.palette.common.yellow,

    opacity: 1,
    marginTop: "2rem",
  },

  keynoteHeader: {
    fontFamily: "Raleway",
    fontWeight: 800,
    color: theme.palette.common.blue,
  },
  keynoteHeaderItem: {
    marginTop: "2rem",
    marginBottom: "2rem",
  },
  divider: {
    backgroundColor: theme.palette.common.blue,
    height: "0.175rem",
  },
  avatarLarge: {
    width: "15em",
    height: "15em",
  },
  avatarSmall: {
    width: "10em",
    height: "10em",
  },
  speakersHeader: {
    marginTop: "0.3rem",
    fontSize: "1.1em",
    fontWeight: 900,
    color: theme.palette.common.blue,
  },
  speakersSubHeader: {
    fontSize: "0.6em",
  },
}));
export default BlockFour;
