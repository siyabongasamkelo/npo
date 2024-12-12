import React from "react";
import {
  Action,
  Details,
  ProfilePhoto,
  TeamCoverCard,
} from "./TeamCard.styled";
// import profile from "../../assets/img/profile.jpg";
import { Envelope, Telephone } from "react-bootstrap-icons";
import { Button } from "./Button.styled";

const TeamCard = ({ image }) => {
  return (
    <TeamCoverCard>
      <ProfilePhoto backgroundImage={image}></ProfilePhoto>
      <Details>
        <div>
          <p>
            Email &nbsp;&nbsp;
            <Envelope />: &nbsp;&nbsp;Siya@gmail.com
          </p>
        </div>
        <div>
          <p>
            contact &nbsp;&nbsp;
            <Telephone />: &nbsp;&nbsp;061 189 2221
          </p>
        </div>
        <div>
          <p>Occupation : &nbsp;&nbsp;Founder</p>
        </div>
      </Details>
      <Action>
        <Button>Contact</Button>
      </Action>
    </TeamCoverCard>
  );
};

export default TeamCard;
