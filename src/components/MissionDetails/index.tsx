import React from 'react'
import { useParams } from 'react-router'
import { useLaunchProfileQuery } from "./../../generated/graphql"
import MissionDetailsUI from "./MissionDetailsUI"
import Loading from "./Loading"

export const MissionDetailsContainer = () => {

    const {id} = useParams()

    const { data, loading, error } = useLaunchProfileQuery({
           variables: {id: id},
         });

         if (loading){
             return(
                <Loading/>
             )
         }

         if(error){
             return(
                 <div>
                     Error...
                 </div>
             )
         }

         if (!data){
             return(
                 <div>
                     Data not available
                 </div>
             )
         }

    return (
        <div>
            <MissionDetailsUI  data = {data} />
        </div>
    )
}
