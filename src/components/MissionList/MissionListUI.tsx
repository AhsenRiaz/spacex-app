import React from 'react'
import { Link } from 'react-router-dom';
import { LaunchListQuery } from "./../../generated/graphql"
import { Button, Typography } from "@material-ui/core";
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import "./MissionList.css"



const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));





interface Props {
  data: LaunchListQuery
}

const MissionListUI: React.FC<Props> = ({ data }) => {

  const classes = useStyles();

  return (

    <div className="MissionList">

      <div className="MissionImg">
        <div className="MissionList_Heading">
          <div className="MissionText_div">

            <Typography className="MissionList_Heading_typo" variant="h2">
              Missions
            </Typography>
          </div>
        </div>
      </div>
      <div className="MissionList_wrapper">

        <div className={classes.root}>
          <Container fixed>
            <Grid container spacing={3}>
              {data.launches?.map((launch, ind) => {
                return (
                  <Grid key = {ind} item lg={4} md={4} sm={12} xs={12} >
                    <div key = {ind} className="MissionList_div">
                      <Paper key = {ind} className={classes.paper}>
                        <Typography className = "MissionName"  variant="h4">
                          {launch?.mission_name}
                        </Typography>


                        <Typography color = "primary"  className="MissionList_year" variant="h4">
                          Launch-Year {launch?.launch_year}
                        </Typography>
                        <Link to={`/missions/${launch?.flight_number}`} >
                          <div className = "Mission_button">
                            <Button variant="contained" color="primary" >
                              LEARN MORE
                            </Button>
                          </div>
                        </Link>
                      </Paper>
                    </div>
                  </Grid>

                )
              })}
            </Grid>


          </Container>
        </div>
      </div>
    </div>
  )
}

export default MissionListUI


