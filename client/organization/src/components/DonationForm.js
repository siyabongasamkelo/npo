import React from "react";
import { DonationFormWrapper } from "./DonationForm.styled";
import { Button } from "./common/Button.styled";
import { useFormik } from "formik";
import { personalDetails } from "../validations/PersonalDetails";
import axios from "axios";
import { toast } from "react-toastify";

const DonationForm = () => {
  const showToastErrorMessage = (message) => {
    toast.error(message);
  };

  const successToastMessage = (message) => {
    toast.success(message);
  };

  const formik = useFormik({
    initialValues: {
      firstname: "",
      lasttname: "",
      email: "",
    },
    validationSchema: personalDetails,
    onSubmit: async () => {
      try {
        const { lastname } = formik.values;
        const { firstname } = formik.values;
        const { email } = formik.values;

        const url = "http://localhost:5000/send/donation";

        try {
          axios.post(url, { lastname, firstname, email });
        } catch (err) {
          console.log(err);
          showToastErrorMessage(
            "there was a problem while registering you please try again"
          );
        }

        successToastMessage("user registered successfully");
      } catch (err) {
        console.log(err.message);
        showToastErrorMessage("Something went wrong please try again later");
      }
    },
  });

  return (
    <DonationFormWrapper>
      <p>Personal Details</p>
      <label for="firstname">first name</label>
      <input type="firstname" id="firstname" placeholder="firstname" />
      <br></br>
      <label for="firstname">last name</label>
      <input type="lastname" id="lastname" placeholder="lastname" />
      <br></br>
      <label for="firstname">email name</label>
      <input type="email" id="email" placeholder="email" />
      <Button>Next</Button>
    </DonationFormWrapper>
  );
};

export default DonationForm;
