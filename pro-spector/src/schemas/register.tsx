import * as yup from "yup";

const RegisterSchema = yup.object().shape({
  completeName: yup.string().required("Insert your complete name here"),
  email: yup.string().required("You must insert your e-mail here"),
  phone: yup.string().required("This field is required"),
  password: yup.string().required("Really? No password?"),
});

  export default RegisterSchema