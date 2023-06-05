import * as yup from "yup";

const RegisterSchema = yup.object().shape({
  name: yup.string().required("Insert your complete name here"),
  email: yup.string().required("You must insert your e-mail here"),
  password: yup.string().required("Really? No password?"),
  admin: yup.bool()
});

  export default RegisterSchema