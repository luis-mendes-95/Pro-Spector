import * as yup from "yup";

export const ConversionSchema = yup.object().shape({
  title: yup.string().required("Insert a title about your conversion process"),
  value: yup.number().required("You must insert the value of the negotiation"),
  description: yup.string(),
  sucess: yup.boolean(),
});

