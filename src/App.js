import React from 'react';
import './App.css';
import NavBar from "./component/navbar"
import Sidebar from './component/sidebar'; 
import Main from "./component/main";
import Front from "./component/front";


function App() {
  return (
    <div>
 
      <NavBar />
    <Sidebar/>
      <Main/> 
      <Front/>
     
    </div>
  );
}

export default App;
