import React from "react";
import {
  ImageDiv,
  ProjectCardAction,
  ProjectCardWrapper,
  TextDiv,
} from "./ProjectCard.styled";
import { Button } from "./Button.styled";
import { Link } from "react-router-dom";

const ProjectCard = ({ name, description, photo }) => {
  return (
    <ProjectCardWrapper>
      <ImageDiv>
        <img src={photo} alt="house" />
      </ImageDiv>
      <TextDiv>
        <h6>{name}</h6>
        <p>{description}</p>
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
