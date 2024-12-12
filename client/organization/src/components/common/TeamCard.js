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

const TeamCard = ({ image, occupation, email, phone }) => {
  return (
    <TeamCoverCard>
      <ProfilePhoto backgroundImage={image}></ProfilePhoto>
      <Details>
        <div>
          <p>
            Email &nbsp;&nbsp;
            <Envelope />: &nbsp;&nbsp;{email}
          </p>
        </div>
        <div>
          <p>
            contact &nbsp;&nbsp;
            <Telephone />: &nbsp;&nbsp;{phone}
          </p>
        </div>
        <div>
          <p>Occupation : &nbsp;&nbsp;{occupation}</p>
        </div>
      </Details>
      <Action>
        <Button>Contact</Button>
      </Action>
    </TeamCoverCard>
  );
};

export default TeamCard;
