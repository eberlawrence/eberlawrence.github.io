import React from "react";
import logo from "./logo.svg";
import my_photo from "./me.png";
import githubLogo from "./github_logo.svg";
import "./App.css";

function App() {
  return (
    <>
    <div className="menu-div">

    </div>
      <div className="intro_div">
        <div className="flex-item-left">
          <p className="p1 show-hello">Hey there!</p>
          <p className="p2 show-presentation">I'm Eber Lawrence, and</p>
          <p className="p2 show-presentation">I'm a Biomedical Engineer.</p>

        </div>
        <div className="flex-item-right">
          <img src={my_photo} className="show-pic"/>
        </div>
      </div>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p className="blink_me">
            Under construction...
          </p>
          <p  >
            Meanwhile, take a look at my GitHub page:
          </p>
          <a href="https://github.com/eberlawrence/">
            <img alt="Qries" src={githubLogo}
              width="150" height="70" />
          </a>
        </header>
      </div>
    </>
  );
}

export default App;
