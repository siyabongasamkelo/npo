import React from "react";
import { FormCover } from "./ContactForm.styled";
import { Button } from "./Button.styled";

const ContactForm = () => {
  return (
    <FormCover>
      <input type="email" name="email" id="email" placeholder="Your email" />
      <br></br>
      <textarea
        placeholder="Type your message here..."
        name="message"
        id="message"
      ></textarea>
      <Button>Submit</Button>
    </FormCover>
  );
};

export default ContactForm;
