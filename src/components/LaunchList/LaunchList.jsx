 import React from "react";
import { Launch } from "../Launch/Launch";
import './styles.css'
 export class LaunchList extends React.Component {
     render() {
         return (
         <div className="launch-list">
             <Launch
              banner="https://spaceflight101.com/pslv-c37/wp-content/uploads/sites/140/2017/02/2-sb12629.jpg"
              title="Falcon sat" 
              launchDate="2006-03-25T10:30:00+12:00" 
              description="Falcon 9 is  can return to Earth and be flown again multiple times"
              />

    <Launch 
     banner="https://spaceflight101.com/pslv-c37/wp-content/uploads/sites/140/2017/02/2-sb12629.jpg"
     title="Falcon sat" 
     launchDate="2006-03-25T10:30:00+12:00" 
     description="Falcon 9 is  can return to Earth and be flown again multiple times"
     />
     <Launch 
     banner="https://spaceflight101.com/pslv-c37/wp-content/uploads/sites/140/2017/02/2-sb12629.jpg"
     title="Falcon sat" 
     launchDate="2006-03-25T10:30:00+12:00" 
     description="Falcon 9 is  can return to Earth and be flown again multiple timesS"
     />
         </div>
         )
     }
 }