import React from "react";
import Header from "./Header";
import {
  ProjectDetailsWrapper,
  ProjectDetailsCover,
} from "./ProjectDetails.styled";
import ProjectDetailsCard from "./common/ProjectDetailsCard";
import Footer from "./common/Footer";
import propic from "../assets/img/before.jpg";
import after from "../assets/img/after.jpg";
import girlsTalk from "../assets/img/girlsTalk.jpg";
import food1 from "../assets/img/org4.jpg";
import food2 from "../assets/img/org7.jpg";
import school from "../assets/img/school.jpg";

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
        <ProjectDetailsCard
          projectName={"Class Painting"}
          before={propic}
          after={after}
          description={
            "As Sitinonke Foundation, we decided to surprise Buhlebamangwe Primary School’s Grade R class by painting their classroom with vibrant colors. We believe in putting a smile on our little faces. We can’t wait to see the joy and happiness when the school reopens. A big thank you to Mr. Buthelezi for opening his hands to grow his school as a new NPO and for the support by coming to check on us as we worked. Please do enjoy your new classroom, Grade R."
          }
        />
        <ProjectDetailsCard
          projectName={"Girls Talk"}
          before={school}
          after={girlsTalk}
          description={
            "Sitinonke Organization works closely with the girls from Buhlebamangwe Primary School, teaching them about sanitary pads. As girls grow, educating them about sanitary pads and the best ways to stay clean and healthy is our biggest goal as an organization. We aim to grow with these girls and guide them in the right direction."
          }
        />
        <ProjectDetailsCard
          projectName={"Food Parcel"}
          before={food1}
          after={food2}
          description={
            "We keep on helping where we can. On this day, we paid a visit to a family of two—a single young mother—where we were able to buy groceries and some clothes for Christmas. Thanks to our donor, Ann Friedholm, and her team, we appreciate your help. As we continue to grow, we continue to help families in need with our food parcels on our journey to feed more families."
          }
        />
      </ProjectDetailsCover>
      <Footer />
    </ProjectDetailsWrapper>
  );
};

export default ProjectDetails;
