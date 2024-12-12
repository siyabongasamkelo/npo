import React from "react";
import { DonationFormWrapper } from "./DonationForm.styled";
import { Button } from "./common/Button.styled";
import { useFormik } from "formik";
import { personalDetails } from "../validations/PersonalDetails";
import axios from "axios";
import { toast } from "react-toastify";
import Spinner from "react-bootstrap/Spinner";
import { useContext, useState } from "react";
import { PayButtonContext } from "../context/PayButtonContext";
import { useNavigate } from "react-router-dom";

const DonationForm = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const { addPayButton } = useContext(PayButtonContext);

  const showToastErrorMessage = (message) => {
    toast?.error(message);
  };

  const successToastMessage = (message) => {
    toast?.success(message);
  };

  const formik = useFormik({
    initialValues: {
      firstname: "",
      lastname: "",
      email: "",
      amount: "10",
    },
    validationSchema: personalDetails,
    onSubmit: async () => {
      setLoading(true);

      const { lastname } = formik.values;
      const { firstname } = formik.values;
      const { email } = formik.values;
      const { amount } = formik.values;

      // const url = "http://localhost:5000/donate/payment";

      const url = "https://sitinonke.onrender.com";

      try {
        // sending user details and recieving pay button from server
        const sendUserDetails = await axios.post(url, {
          lastname,
          firstname,
          email,
          amount,
        });

        console.log(sendUserDetails);
        addPayButton(sendUserDetails?.data);
        localStorage.setItem("payButton", sendUserDetails?.data);
        successToastMessage("user registered successfully");
        setLoading(false);

        setTimeout(navigate("/donate/paybutton"), 4000);
      } catch (err) {
        console.log(err);
        showToastErrorMessage(
          "there was a problem while registering you please try again"
        );
        showToastErrorMessage(err?.message);
        setLoading(false);
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
          <label className="error">{formik?.errors?.firstname}</label>
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
          <label className="error">{formik?.errors?.lastname}</label>
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
          <label className="error">{formik?.errors?.email}</label>
        )}
      </div>

      <div>
        <label for="amount">amount to donate in rands</label>
        <input
          type="text"
          id="amount"
          name="amount"
          placeholder="amount to donate"
          value={formik.values.amount}
          onBlur={formik.handleBlur}
          onChange={formik.handleChange}
        />

        {formik.errors.amount && (
          <label className="error">{formik?.errors?.amount}</label>
        )}
      </div>
      <Button type="submit">
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
