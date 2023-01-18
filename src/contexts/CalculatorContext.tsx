import { createContext, useState } from "react";
import { CalculatorProps, ICalculator } from "../interfaces";

export interface CalculatorProviderData {}

export const CalculatorContext = createContext<CalculatorProviderData>(
  {} as CalculatorProviderData
);

export const CalculatorProvider = ({ children }: CalculatorProps) => {
  return (
    <CalculatorContext.Provider value={{}}>
      {children}
    </CalculatorContext.Provider>
  );
};
