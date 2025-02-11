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
            "as Sitinonke foundation we decided to surprise Buhlebamangwe primary school grade R class by color painting their classroom we believe in putting a smile on our little faces ,we can’t wait to see the joy and happiness when the schools opens .a big thank you to Mr Buthelezi for opening his hands to grow his school as a new npo and also for the support to come and check on us as we were working .please do enjoy your class grade R"
          }
        />
        <ProjectDetailsCard
          projectName={"Girls Talk"}
          before={girlsTalk}
          after={girlsTalk}
          description={
            "Sitinonke organizationworks close with the girls from Buhlebamangwe Primary School teaching them about senetary pads. as girls child grows teaching them about senetarity pads them the best way to keep clean and healthy is our biggest goal as an organization. we tend to grow with girls and lead them the right way. "
          }
        />
        <ProjectDetailsCard
          projectName={"Food Parcel"}
          before={food1}
          after={food2}
          description={
            "We keep on helping where we can on this day we paid a visit to a family of two, a single young mother where we were able to buy groceries for them and some clothes for Christmas. Thanks to our donor Ann Friedholm with her team we appreciated your help. As we continue to grow we continue to help families in need with our food parcels of our journey to feed more families."
          }
        />
      </ProjectDetailsCover>
      <Footer />
    </ProjectDetailsWrapper>
  );
};

export default ProjectDetails;
