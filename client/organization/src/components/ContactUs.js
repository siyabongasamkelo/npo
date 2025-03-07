import React from "react";
import {
  ContactDetails,
  // ContactFormCover,
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
import { Link } from "react-router-dom";
// import ContactForm from "./common/ContactForm";

const ContactUs = () => {
  return (
    <ContactUsCover id="contactUs">
      <h2>Contact Us</h2>
      <ContactUsWrapper>
        {/* <ContactFormCover><ContactForm /></ContactFormCover> */}
        <ContactDetails>
          <p>
            <Envelope /> sitinonkefoundation5@gmail.org
          </p>
          <p>
            <Telephone /> 079 793 4230
          </p>

          <p>
            <Whatsapp /> 079 793 4230
          </p>
          <p>
            <GeoAlt /> Kwazulu-Natal, Nquthu, Sandlwana
          </p>
          <p>
            <Link to={"https://www.facebook.com/profile.php?id=61561702177958"}>
              <Facebook />
            </Link>
            <TwitterX />

            <Link to="https://www.instagram.com/ssitinonkefoundation23/?utm_source=qr&igsh=MzNlNGNkZWQ4Mg%3D%3D">
              <Instagram />
            </Link>
          </p>
        </ContactDetails>
      </ContactUsWrapper>
    </ContactUsCover>
  );
};

export default ContactUs;
