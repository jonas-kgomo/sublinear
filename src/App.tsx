import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Tasks from "./Tasks";
import Project from "./Project";

function App() {
  return (
    <div className="App">
      <h1>
        Sublinear <img alt="logo" src="/logo.png" className="Logo" />
      </h1>

      <header className="App-header">
        <button className="btn">Fetch</button>
        <p>Sync linear tasks with notion</p>
        <Tasks />

        <div className="container">
          <img
            alt="project"
            className="App-logo"
            src="https://raw.githubusercontent.com/jonas-kgomo/sublinear/main/assets/logo.png"
          />
          <div className="centered">
            <Project />
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
