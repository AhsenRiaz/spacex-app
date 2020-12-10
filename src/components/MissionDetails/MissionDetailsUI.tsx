import React from 'react'
import { LaunchProfileQuery } from "./../../generated/graphql"
// import MissionImage from "./MainImage"
import "./MissionDetails.css"
import { Container, Typography, makeStyles, Grid } from "@material-ui/core";
import MainImage from "./MainImage"

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
    data: LaunchProfileQuery
}

const MissionDetailsUI: React.FC<Props> = ({ data }) => {
    const classes = useStyles()
    return (
        <div className="MainDetails_wrapper">
            <div className="mainImage">
                <MainImage />
            </div>
            <Container maxWidth="lg" >

                <div className="MissionDetails_info">
                    <div className="MissionDetails_heading">
                        <Typography variant="h4">
                            MISSION NAME : {data.launch?.mission_name}
                        </Typography>
                    </div>

                    <div className="MissionInfo_wrapper">
                        <div className="MissionDetails_flight">
                            <Typography variant="h4" >
                                Flight Number:
                        </Typography>
                            <Typography variant="h4">
                                {data.launch?.flight_number}

                            </Typography>

                        </div>

                        <div className="MissionDetails_details">
                            <Typography variant="h4">
                                DETAILS :
              </Typography>
                            <Typography variant="subtitle1">
                                {data.launch?.details}
                            </Typography>

                        </div>

                        <div className="MissionDetails_success">
                            <Typography variant="h4">
                                Mission Success:
              </Typography>
                            {data.launch?.launch_success ? (
                                <div>
                                    <Typography variant="h5">
                                        Successfull
                      </Typography>
                                </div>
                            ) :
                                (
                                    <div>
                                        <Typography variant="h5">
                                            Fail

                      </Typography>
                                    </div>
                                )
                            }

                        </div>

                        <div className="MissionDetails__site">
                            <Typography variant="h4">
                                Launch Site:
              </Typography>
                            <Typography variant="h6">
                                {data.launch?.launch_site?.site_name}

                            </Typography>

                        </div>

                        <div className="MissionDetails_Rocket">
                            <Typography variant="h6">
                                Rocket Name | Type :
              </Typography>
                            <Typography variant="h6">
                                {data.launch?.rocket?.rocket_name} | {data.launch?.rocket?.rocket_type}
                            </Typography>

                        </div>


                    </div>


                </div>

                <div className="MissionDetails_images">
                    <Typography variant="h4">
                        Mission Images

                    </Typography>
                    <div id="images" className={classes.root}>
                        <Grid container spacing={3}>
                            {data.launch?.links?.flickr_images === null || data.launch?.links?.flickr_images === undefined || data.launch?.links?.flickr_images.length < 1 ? <span>There is no image to show</span> :
                                <div className = ".MissionDetails_images">
                                    {data.launch?.links?.flickr_images?.map((image, ind) =>
                                        image ? <img key={ind} width = {350} height = {250} src={image} alt={image} /> : null
                                    )}
                                </div>}



                        </Grid>

                    </div>

                </div>

            </Container>
        </div>
    )
}


export default MissionDetailsUI


// {!!data.launch?.links && !!data.launch.links.flickr_images && (
//     <div >
//         {data.launch.links.flickr_images.map(image =>
//             image ? <img src={image} width={300} height={250} alt={image} key={image} /> : <h2>No image to show</h2>
//         )}
//     </div>
// )}