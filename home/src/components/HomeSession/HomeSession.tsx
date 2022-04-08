import React, { useEffect, useState } from "react";

import background1 from "images/bg3.png";
import background2 from "images/bg2.png";
import my_photo from "images/me.png";
import githubIcon from "images/githubIcon.svg";
import linkedinIcon from "images/linkedinIcon.svg";
import twitterIcon from "images/twitterIcon.svg";
import discordIcon from "images/discordIcon.svg";

import "./styles/styles.scss";
import "./styles/landscapeStyles.scss";
import "./styles/portraitStyles.scss";

const HomeSession: React.FC = () => {

  const [adaptativePage, setAdaptativePage] = useState<boolean>(false);

  useEffect(() => {
    const checkSreenWidth = () => {
      if (window.innerWidth < 600) {
        setAdaptativePage(true)
      }
      else {
        setAdaptativePage(false)
      }
    };
    checkSreenWidth();
  }, []);


  return (
    <div className="menu-intro-div">
      {adaptativePage ? <img src={background2} alt="" /> : <img src={background1} alt="" />}
      <div className="intro_div" id="home">
        <div className="flex-item-left">
          <p className="p1 show-hello">Hey there!</p>
          <h1 className="p2 show-presentation">I'm Eber Lawrence, and</h1>
          <p className="p2 show-presentation">I'm a Biomedical Engineer.</p>
        </div>
        <div className="flex-item-right">
          <img src={my_photo} className="show-pic" alt="me" />
        </div>
      </div>
      <div className="social-media-container show-social-media">
        <div className="social-media">
          <div className="social-media-text-container">
            <p className="social-media-text">Social medias</p>
          </div>
          <ul className="social-media-list">
            <li>
              <a href="https://github.com/eberlawrence" target="_blank" rel="noopener noreferrer">
                <div className="icon-borders">
                  <img alt="githubIcon" src={githubIcon} />
                </div>
              </a>
            </li>
            <li>
              <a href="https://linkedin.com/in/eberlawrence" target="_blank" rel="noopener noreferrer">
                <div className="icon-borders">
                  <img alt="linkedinIcon" src={linkedinIcon} />
                </div>
              </a>
            </li>
            <li>
              <a href="https://twitter.com/EberLawrence" target="_blank" rel="noopener noreferrer">
                <div className="icon-borders">
                  <img alt="twitterIcon" src={twitterIcon} />
                </div>
              </a>
            </li>
            <li>
              <a href="/#" >
                <div className="icon-borders">
                  <img alt="discordIcon" src={discordIcon} />
                </div>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default HomeSession;