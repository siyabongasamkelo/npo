import React from "react";
import {
  ImageDiv,
  ProjectCardAction,
  ProjectCardWrapper,
  TextDiv,
} from "./ProjectCard.styled";
import propic from "../../assets/img/aboutpic.jpg";
import { Button } from "./Button.styled";
import { Link } from "react-router-dom";

const ProjectCard = () => {
  return (
    <ProjectCardWrapper>
      <ImageDiv>
        <img src={propic} alt="house" />
      </ImageDiv>
      <TextDiv>
        <p>
          on this day we visited the children of the orphanage in kwazulu-natal
          and we did paintings for them that they will use in future
        </p>
      </TextDiv>
      <ProjectCardAction>
        <Button>
          <Link to="/projects">Learn More</Link>
        </Button>
      </ProjectCardAction>
    </ProjectCardWrapper>
  );
};

export default ProjectCard;
