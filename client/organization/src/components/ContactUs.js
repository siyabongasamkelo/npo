import React from "react";
import {
  ContactDetails,
  ContactFormCover,
  ContactUsCover,
  ContactUsWrapper,
} from "./ContactUs.styled";
import {
  Envelope,
  Facebook,
  GeoAlt,
  Instagram,
  Telephone,
  TwitterX,
  Whatsapp,
} from "react-bootstrap-icons";
import ContactForm from "./common/ContactForm";

const ContactUs = () => {
  return (
    <ContactUsCover id="contactUs">
      <h2>Contact Us</h2>
      <ContactUsWrapper>
        <ContactFormCover>
          <ContactForm />
        </ContactFormCover>
        <ContactDetails>
          <p>
            <Envelope /> siya@gmail.com
          </p>
          <p>
            <Telephone /> 061 189 2221
          </p>
          <p>
            <GeoAlt /> Kwazulu-Natal, Nquthu, Sandlwana
          </p>
          <p>
            <Facebook />
            <TwitterX />
            <Instagram />
            <Whatsapp />
          </p>
        </ContactDetails>
      </ContactUsWrapper>
    </ContactUsCover>
  );
};

export default ContactUs;
