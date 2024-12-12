import * as yup from "yup";

export const personalDetails = yup.object().shape({
  firstname: yup.string().required(),
  lastname: yup.string().required(),
  email: yup.string().email("email not valid").required(),
  amount: yup.string().required(),
});
