import React from "react";
import Header from "./Header";
import {
  ProjectDetailsWrapper,
  ProjectDetailsCover,
} from "./ProjectDetails.styled";
import ProjectDetailsCard from "./common/ProjectDetailsCard";
import Footer from "./common/Footer";

const ProjectDetails = () => {
  return (
    <ProjectDetailsWrapper>
      <div
        style={{
          backgroundColor: "black",
          padding: "10px",
          borderRadius: "30px",
          marginTop: "2%",
        }}
      >
        <Header />
      </div>
      <ProjectDetailsCover>
        <ProjectDetailsCard />
      </ProjectDetailsCover>
      <Footer />
    </ProjectDetailsWrapper>
  );
};

export default ProjectDetails;
