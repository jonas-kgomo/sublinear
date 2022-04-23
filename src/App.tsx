import React from "react";
// import logo from "./logo.png";
import "./App.css";
import Tasks from "./Tasks";
import Sync from "./Sync";
import Project from "./Project";

function App() {
  return (
    <div className="App">
      <h1>
        Sublinear <img alt="logo" src="/logo.png" className="Logo" />
      </h1>

      <header className="App-header">
        <div className="sync"> <p>Sync Linear issues with Notion </p>   </div>
    
        {/* <Tasks /> */}
        <Sync/>
        <Project />

        {/* <div className="container">
          <img
            alt="project"
            className="App-logo"
            src="https://raw.githubusercontent.com/jonas-kgomo/sublinear/main/assets/logo.png"
          />
          <div className="centered">
            <Project />
          </div>
        </div> */}
      </header>
    </div>
  );
}

export default App;
