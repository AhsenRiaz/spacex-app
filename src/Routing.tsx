import React from 'react'
import {BrowserRouter as Router , Route , Routes} from "react-router-dom"
import Home from "./components/Home/Home"
import Header from "./components/Header/Header"
import MissionListContainer from "./components/MissionList/index"
import {MissionDetailsContainer} from "./components/MissionDetails/index"

 const Routing = () => {
    return (
        <div>
            <Router>
             <Header/>
            <Routes>
                <Route path = "/" element = {<Home/>} />
                <Route path = "/missions" element = {<MissionListContainer/>} />
                <Route path = "missions/:id" element = {<MissionDetailsContainer/>} />
            </Routes>
            </Router>
           
        </div>
    )
}

export default Routing
