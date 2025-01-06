import React from "react";
import {
  ProjectDetailsCardAction,
  ProjectDetailsCardCover,
  ProjectDetailsCardData,
  ProjectDetailsCardWrapper,
} from "./ProjectDetailsCard.styled";
import propic from "../../assets/img/aboutpic.jpg";

const ProjectDetailsCard = () => {
  return (
    <ProjectDetailsCardWrapper>
      <ProjectDetailsCardCover>
        <ProjectDetailsCardData>
          <div className="images">
            <div className="row1">
              <img src={propic} alt="house" />
            </div>
            <div className="row2">
              <img src={propic} alt="house" />
            </div>
          </div>
          <div className="details">
            <h4>Painting Projects</h4>
            <div>
              <p>
                Painting Projects that was done for the kids at creche this
                Painting Projects that was done for the kids at creche this
                Painting Projects that was done for the kids at creche this
                Painting Projects that was done for the kids at creche this
                Painting Projects that was done for the kids at creche this
                Painting Projects that was done for the kids at creche this
                Painting Projects that was done for the kids at creche this
                Painting Projects that was done for the kids at creche this
                Painting Projects that was done for the kids at creche this
                Painting Projects that was done for the kids at creche this
              </p>
            </div>
          </div>
        </ProjectDetailsCardData>
        <ProjectDetailsCardAction></ProjectDetailsCardAction>
      </ProjectDetailsCardCover>
    </ProjectDetailsCardWrapper>
  );
};

export default ProjectDetailsCard;
