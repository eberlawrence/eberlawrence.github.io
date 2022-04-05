import React, { useEffect, useState } from "react";
import HomeSession from "components/HomeSession/HomeSession";
import TopMenu from "components/TopMenu/TopMenu";

import discordIcon from "images/discordIcon.svg";
import logo from "images/logo.svg";

import "styles/generalStyles.scss";

function MainBoard() {
  return (
    <>
      <TopMenu />
      <HomeSession />
      <div className="" id="about">
        <header className="about-header">
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
    </>
  );
}

export default MainBoard;
