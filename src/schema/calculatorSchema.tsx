import * as yup from "yup";

export const calculatorSchema = yup.object().shape({
  price: yup.number(),
  installments: yup.number(),
  mdr: yup.number(),
});
