import React from "react";
import "./styles.scss";
import my_photo from "images/me.png";
import githubIcon from "images/githubIcon.svg";
import linkedinIcon from "images/linkedinIcon.svg";
import twitterIcon from "images/twitterIcon.svg";
import discordIcon from "images/discordIcon.svg";

const HomeSession: React.FC = () => {
  return (
    <div className="menu-intro-div">
      <div className="intro_div" id="home">
        <div className="flex-item-left">
          <p className="p1 show-hello">Hey there!</p>
          <p className="p2 show-presentation">I'm Eber Lawrence, and</p>
          <p className="p2 show-presentation">I'm a Biomedical Engineer.</p>
        </div>
        <div className="flex-item-right">
          <img src={my_photo} className="show-pic" alt="me" />
        </div>
      </div>
      <div className="social-media">
        <p className="social-media-text">Social medias</p>
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
  );
};

export default HomeSession;