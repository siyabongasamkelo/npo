import React from "react";
import { DonateCover, DonateWrapper } from "./Donate.styled";
import { Button } from "./common/Button.styled";
import { Link } from "react-router-dom";

const Donate = () => {
  return (
    <DonateCover>
      <DonateWrapper>
        <h1>Donate Any Amount Now</h1>
        <p>Your donations can help us make a huge different...</p>
        <div>
          <form>
            <br></br>
            <Link to="/donate">
              <Button type="submit">Donate</Button>
            </Link>
          </form>
        </div>
      </DonateWrapper>
    </DonateCover>
  );
};

export default Donate;
