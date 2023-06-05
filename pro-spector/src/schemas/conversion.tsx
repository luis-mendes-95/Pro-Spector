import * as yup from "yup";

export const ConversionSchema = yup.object().shape({
  value: yup.number().required("You must insert the value of the negotiation"),
  details: yup.string()
});

