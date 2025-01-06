import React from "react";
import { PrevProjWrapper, ProjectsCover } from "./PreviousProjects.styled";
import ProjectCard from "./common/ProjectCard";

const PreviousProjects = () => {
  return (
    <PrevProjWrapper>
      <h2>Previous Projects</h2>
      <ProjectsCover>
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
      </ProjectsCover>
    </PrevProjWrapper>
  );
};

export default PreviousProjects;
