import React from "react";
import { DonateCover, DonateWrapper } from "./Donate.styled";
import { Button } from "./common/Button.styled";

const Donate = () => {
  return (
    <DonateCover>
      <DonateWrapper>
        <h1>Donate Any Amount Now</h1>
        <p>Your donations can help us make a huge different...</p>
        <div>
          <form>
            {/* <input
              type="number"
              placeholder="Enter Amount"
              required
              name="amount"
              id="amount"
            /> */}
            <br></br>
            <Button type="submit">Donate</Button>
          </form>
        </div>
      </DonateWrapper>
    </DonateCover>
  );
};

export default Donate;
