import React from 'react'
import {useLaunchListQuery} from "./../../generated/graphql"
import MissionListUI from "./MissionListUI"
import Loader from "./Loader"


export const MissionListContainer = () => {

    const {data , error , loading} = useLaunchListQuery() 

        console.log(data)

    if(loading){
        return (
           <Loader/>
        )
    }

    if (error || !data){
        return(
            <div>
                There is some error... Please Try after some while
            </div>
        )
    }


    return (
        <div>
           <MissionListUI data = {data} />
        </div>
    )
}

export default MissionListContainer
