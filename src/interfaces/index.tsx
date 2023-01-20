import { ReactNode } from "react";

export interface CalculatorProps {
  children: ReactNode;
}

export interface ICalculator {
  amount: number;
  installments: number;
  mdr: number;
  days?: number[];
}
