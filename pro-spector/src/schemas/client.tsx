import * as yup from "yup";

export const ClientSchema = yup.object().shape({
  name: yup.string().required("Type client's complete name here"),
  email: yup.string().required("Type client's e-mail here"),
  phone: yup.string().required("Type client's phone here"),
  registerDate: yup.string(),
});

export const ClientContactSchema = yup.object().shape({
    name: yup.string().required("Type client's complete name here"),
    email: yup.string().required("Type client's e-mail here"),
    phone: yup.string().required("Type client's phone here"),
    // registerDate: yup.string(),
});

export const ClientContactEditSchema = yup.object().shape({
  name: yup.string(),
  email: yup.string(),
  phone: yup.string(),
  // registerDate: yup.string(),
});
