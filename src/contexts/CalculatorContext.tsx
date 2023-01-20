import { createContext, useState } from "react";
import { CalculatorProps, ICalculator } from "../interfaces";
import api from "../services/api";

export interface CalculatorProviderData {
  handleCalculator: (data: ICalculator) => void;
  totalAmount: string;
}

export const CalculatorContext = createContext<CalculatorProviderData>(
  {} as CalculatorProviderData
);

export const CalculatorProvider = ({ children }: CalculatorProps) => {
  const [totalAmount, setTotalAmount] = useState("");

  const handleCalculator = async (data: ICalculator) => {
    await api
      .post("", data)
      .then((response) => {
        setTotalAmount(response.data);
        console.log(response.data);
      })
      .catch((err) => console.warn(err));
  };
  return (
    <CalculatorContext.Provider
      value={{
        handleCalculator,
        totalAmount,
      }}
    >
      {children}
    </CalculatorContext.Provider>
  );
};
