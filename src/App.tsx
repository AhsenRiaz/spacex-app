import React from 'react';
import './App.css';
import Routing from "./Routing"
import 'bootstrap/dist/css/bootstrap.min.css';
import firebase from "./firebase"


function App() {

  React.useEffect(() => {

      const messaging = firebase.messaging();
      messaging.requestPermission().then(() => {
        return messaging.getToken().then((token) => {
          prompt("Welcome to SpaceX \n Token" , token)
        })
      })

  } , []);
   
  return (
    

    <div className="App">
      <Routing/>
     
    </div>
    
  );
}

export default App;
