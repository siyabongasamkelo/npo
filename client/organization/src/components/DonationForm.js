import React from "react";
import { DonationFormWrapper } from "./DonationForm.styled";
import { Button } from "./common/Button.styled";
import { useFormik } from "formik";
import { personalDetails } from "../validations/PersonalDetails";
import axios from "axios";
import { toast } from "react-toastify";
import { useState } from "react";
import Spinner from "react-bootstrap/Spinner";

const DonationForm = () => {
  const [loading, setLoading] = useState(false);

  const showToastErrorMessage = (message) => {
    toast.error(message);
  };

  const successToastMessage = (message) => {
    toast.success(message);
  };

  const formik = useFormik({
    initialValues: {
      firstname: "",
      lastname: "",
      email: "",
    },
    validationSchema: personalDetails,
    onSubmit: async () => {
      try {
        setLoading(true);

        const { lastname } = formik.values;
        const { firstname } = formik.values;
        const { email } = formik.values;

        const url = "http://localhost:5000/donate/payment";

        try {
          const sendUserDetails = await axios.post(url, {
            lastname,
            firstname,
            email,
          });
          console.log(sendUserDetails);
          setLoading(false);
        } catch (err) {
          console.log(err);
          showToastErrorMessage(
            "there was a problem while registering you please try again"
          );
          setLoading(false);
        }

        successToastMessage("user registered successfully");
        setLoading(true);
      } catch (err) {
        console.log(err.message);
        showToastErrorMessage("Something went wrong please try again later");
        setLoading(true);
      }
    },
  });

  return (
    <DonationFormWrapper onSubmit={formik.handleSubmit}>
      <p>Personal Details</p>

      <div>
        <label for="firstname">first name</label>
        <input
          type="firstname"
          id="firstname"
          name="firstname"
          placeholder="firstname"
          value={formik.values.username}
          onBlur={formik.handleBlur}
          onChange={formik.handleChange}
        />
        <br></br>
        {formik.errors.firstname && (
          <label className="error">{formik.errors.firstname}</label>
        )}
      </div>

      <div>
        <label for="lastname">last name</label>
        <input
          type="lastname"
          id="lastname"
          name="lastname"
          placeholder="lastname"
          value={formik.values.lastname}
          onBlur={formik.handleBlur}
          onChange={formik.handleChange}
        />

        <br></br>
        {formik.errors.lastname && (
          <label className="error">{formik.errors.lastname}</label>
        )}
      </div>

      <div>
        <label for="email">email name</label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="email"
          value={formik.values.email}
          onBlur={formik.handleBlur}
          onChange={formik.handleChange}
        />

        {formik.errors.email && (
          <label className="error">{formik.errors.email}</label>
        )}
      </div>
      <Button>
        {loading ? (
          <div className=" d-flex justify-content-center align-items-center">
            <Spinner animation="border" role="status" />
            <span style={{ marginLeft: "10px" }}>sending</span>
          </div>
        ) : (
          "Send details"
        )}
      </Button>
    </DonationFormWrapper>
  );
};

export default DonationForm;
