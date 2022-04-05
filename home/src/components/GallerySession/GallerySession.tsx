import React from "react";
import discordIcon from "images/discordIcon.svg";
import logo from "images/logo.svg";
import "./styles.scss";


const GallerySession: React.FC = () => {
  return (
    <div className="" id="gallery">
      <header className="gallery-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p className="blink_me">
          Under construction...
        </p>
        <p  >
          Meanwhile, take a look at my GitHub page:
        </p>
        <a href="https://github.com/eberlawrence/">
          <img alt="Qries" src={discordIcon}
            width="150" height="70" />
        </a>
      </header>
    </div>
  );
};

export default GallerySession;