import React from "react";
import logo from "./logo.svg";
import githubLogo from "./github_logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p className="blink_me">
          Under construction...
        </p>
        <p>
          Meanwhile, take a look at my GitHub page:
        </p>
        <a href="https://github.com/eberlawrence/">
          <img alt="Qries" src={githubLogo}
            width="150" height="70" color="#FFFFFF" />
        </a>
      </header>
    </div>
  );
}

export default App;
