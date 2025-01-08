import React from "react";
import { PrevProjWrapper, ProjectsCover } from "./PreviousProjects.styled";
import ProjectCard from "./common/ProjectCard";
import propic from "../assets/img/pro1.jpg";
import girlsTalk from "../assets/img/girlsTalk.jpg";
import food from "../assets/img/org4.jpg";

const PreviousProjects = () => {
  return (
    <PrevProjWrapper>
      <h2>Previous Projects</h2>
      <ProjectsCover>
        <ProjectCard
          name={"School Painting Day"}
          photo={propic}
          description={
            "On this day we visited the school to help with the painting projects painting pictures that kids will use.."
          }
        />
        <ProjectCard
          name={"Girls Talk"}
          photo={girlsTalk}
          description={
            "Sitinonke Organization works close with the girls teaching tem about senetarity pads"
          }
        />
        <ProjectCard
          name={"Food Parcels"}
          photo={food}
          description={
            "Sitinonke organization was handing foof parcels to the local members of Isandlwana."
          }
        />
      </ProjectsCover>
    </PrevProjWrapper>
  );
};

export default PreviousProjects;
