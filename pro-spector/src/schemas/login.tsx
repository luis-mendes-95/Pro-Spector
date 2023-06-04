import * as yup from "yup";

const UserLoginSchema = yup.object().shape({
  email: yup.string().required("Insert your username here"),
  password: yup.string().required("Really? No password?"),
});

  export default UserLoginSchema