import React from "react";
import TopMenu from "components/TopMenu/TopMenu";
import HomeSession from "components/HomeSession/HomeSession";
import AboutSession from "components/AboutSession/AboutSession";
import SkillSession from "components/SkillSession/SkillSession";
import ProjectSession from "components/ProjectSession/ProjectSession";
import GallerySession from "components/GallerySession/GallerySession";
import ContactSession from "components/ContactSession/ContactSession";

function MainBoard() {
  return (
    <>
      <TopMenu />
      <HomeSession />
      <AboutSession />
      <SkillSession />
      <ProjectSession />
      <GallerySession />
      <ContactSession />
    </>
  );
}

export default MainBoard;
