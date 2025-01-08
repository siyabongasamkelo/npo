import React from "react";
import {
  ProjectDetailsCardAction,
  ProjectDetailsCardCover,
  ProjectDetailsCardData,
  ProjectDetailsCardWrapper,
} from "./ProjectDetailsCard.styled";

const ProjectDetailsCard = ({ before, after, projectName, description }) => {
  return (
    <ProjectDetailsCardWrapper>
      <ProjectDetailsCardCover>
        <ProjectDetailsCardData>
          <div className="images">
            <div className="row1">
              {/* <img src={propic} alt="house" /> */}
              <img src={before} alt="house" />
            </div>
            <div className="row2">
              {/* <img src={after} alt="house" /> */}
              <img src={after} alt="house" />
            </div>
          </div>
          <div className="details">
            {/* <h4>Classroom Painting</h4> */}
            <h4>{projectName}</h4>
            <div>
              {/* <p>
                as Sitinonke foundation we decided to surprise Buhlebamangwe
                primary school grade R class by color painting their classroom
                we believe in putting a smile on our little faces ,we can’t wait
                to see the joy and happiness when the schools opens .a big thank
                you to Mr Buthelezi for opening his hands to grow his school as
                a new npo and also for the support to come and check on us as we
                were working .please do enjoy your class grade R
              </p> */}
              <p>{description}</p>
            </div>
          </div>
        </ProjectDetailsCardData>
        <ProjectDetailsCardAction></ProjectDetailsCardAction>
      </ProjectDetailsCardCover>
    </ProjectDetailsCardWrapper>
  );
};

export default ProjectDetailsCard;
