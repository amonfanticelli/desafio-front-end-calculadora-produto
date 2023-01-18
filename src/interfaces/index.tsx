import { ReactNode } from "react";

export interface CalculatorProps {
  children: ReactNode;
}

export interface ICalculator {
  price: number;
  installments: number;
  mdr: number;
}
