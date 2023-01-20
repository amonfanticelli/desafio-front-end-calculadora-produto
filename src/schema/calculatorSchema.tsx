import * as yup from "yup";

export const calculatorSchema = yup.object().shape({
  price: yup.string(),
  installments: yup.string(),
  mdr: yup.string(),
});
