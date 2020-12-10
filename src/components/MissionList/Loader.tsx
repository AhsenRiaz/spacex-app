import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import "./MissionList.css"


export default function Loader() {


  return (
    <div id = "loader" >
      <CircularProgress  />
    </div>
  );
}