import React, { useEffect, useState } from "react";
import robotIcon from "images/robot.svg";
import menuIcon from "images/menuIcon.svg";
import "./styles.scss";
import MenuTopics from "./MenuTopics";


const TopMenu: React.FC = () => {

  const [showMenu, setShowMenu] = useState<string>("menu-div-top-page");
  const [adaptativePage, setAdaptativePage] = useState<boolean>(false);
  const [menuButton, setMenuButton] = useState<boolean>(false);


  useEffect(() => {
    const checkScroll = () => {
      window.onscroll = function () {
        if (window.pageYOffset !== 0) {
          setShowMenu("")
        }
        else {
          setShowMenu("menu-div-top-page")
        }
      }
    };
    const checkSreenWidth = () => {
      if (window.innerWidth < 600) {
        setAdaptativePage(true)
      }
      else {
        setAdaptativePage(false)
      }
    };
    checkScroll();
    checkSreenWidth();
  }, []);

  return (
    <div className={`menu-div ${showMenu} ${menuButton && `menu-div-opened`}`}>
      <div className="header-container">
        <div className="menu-div-my-name">
          <img src={robotIcon} alt="RobotIcon" />
          <a href="https://eberlawrence.com/">Eber Lawrence</a>
        </div>
        {adaptativePage &&
          <button className="menu-button" onClick={() => setMenuButton(!menuButton)}>
            <img src={menuIcon} alt="menuIcon" />
          </button>
        }
      </div>
      {!adaptativePage && <MenuTopics />}
      {menuButton && <MenuTopics />}
    </div>
  );
};

export default TopMenu;