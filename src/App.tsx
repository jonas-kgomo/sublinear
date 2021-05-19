import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Tasks from "./Tasks";

function App() {
  return (
    <div className="App">
      <h1>Sublinear</h1>
      <header className="App-header">
        <Tasks />
        <p>Sync linear tasks with notion</p>

        <img
          className="App-logo"
          src="https://raw.githubusercontent.com/jonas-kgomo/sublinear/main/assets/logo.png"
        />
      </header>
    </div>
  );
}

export default App;
