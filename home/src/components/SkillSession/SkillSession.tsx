import React from "react";
import discordIcon from "images/discordIcon.svg";
import logo from "images/logo.svg";
import "./styles.scss";


const SkillSession: React.FC = () => {
  return (
    <div className="" id="skills">
      <header className="skill-div">
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

export default SkillSession;