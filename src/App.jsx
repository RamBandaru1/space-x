import React from 'react';
import { Header }  from './components/Header/Header.jsx';
import { Launch } from './components/Launch/Launch.jsx';
import './styles.css'
function App() {
  return (
    <div className="App">
    <Header/>
    <Launch banner="https://spaceflight101.com/pslv-c37/wp-content/uploads/sites/140/2017/02/2-sb12629.jpg"
     title="Falcon sat" 
     launchDate="2006-03-25T10:30:00+12:00" 
     description="Falcon 9 is  can return to Earth and be flown again multiple times"/>

    <Launch banner="https://spaceflight101.com/pslv-c37/wp-content/uploads/sites/140/2017/02/2-sb12629.jpg"
     title="Falcon sat" 
     launchDate="2006-03-25T10:30:00+12:00" 
     description="Falcon 9 is  can return to Earth and be flown again multiple times"/>
    </div>
  );
}

export default App;
