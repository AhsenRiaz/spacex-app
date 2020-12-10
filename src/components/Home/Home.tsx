import React from 'react'
import "./Home.css"
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { Link } from 'react-router-dom';






const Home = () => {


    return (

        <div className="Home_Wrapper">
            <div className="Home_main">
                <Container maxWidth="lg">
                    <div id="Home_mainText" >
                        <Typography className="text_heading1" variant="subtitle1" gutterBottom>
                            UPCOMING TEST
                        </Typography>
                        <Typography className="text_para1" variant = "h5" gutterBottom>
                            STARSHIP HIGH-ALTITUDE <br /> FLIGHT TEST
                        </Typography>
                        <div className="Home_Button">
                            <Link to = "/missions" >
                            <button >Check Our Mission</button>
                            </Link>
                            

                        </div>

                    </div>

                </Container>

            </div>
            <div className="Home_second">
                <Container maxWidth="lg">
                    <div id="Home_secondText" >
                        <Typography className="text" variant="h4" gutterBottom>
                            STARSHIP
                        </Typography>
                        <Typography className="text" variant="subtitle1" gutterBottom>
                            SpaceX vehicle Starship is SpaceX’s fully reusable transportation system  <br/> 
                            designed to carry both crew and cargo to the Earth’s orbit, the Moon, Mars, and beyond.
                        </Typography>
                        <div className="Home_secondButton">
                            <Link to = "/missions">
                            <button >Learn More</button>
                            </Link>

                        </div>

                    </div>

                </Container>

            </div>
        </div>

    )
}

export default Home
