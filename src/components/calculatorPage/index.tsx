import { useContext } from "react";
import { useForm } from "react-hook-form";
import { ICalculator } from "../../interfaces";
import { yupResolver } from "@hookform/resolvers/yup";
import { CalculatorContext } from "../../contexts/CalculatorContext";
import { calculatorSchema } from "../../schema/calculatorSchema";
import { Container, Form, Aside } from "./style";

const Calculator = () => {
  const { handleCalculator, totalAmount } = useContext(CalculatorContext);
  const { register, handleSubmit } = useForm<ICalculator>({
    resolver: yupResolver(calculatorSchema),
  });

  return (
    <Container>
      <Form onChange={handleSubmit(handleCalculator)}>
        <h1>Simule sua Antecipação</h1>

        <label htmlFor="amount">Informe o valor da venda *</label>
        <input id="amount" {...register("amount")} type="number" />

        <label htmlFor="installments">Em quantas parcelas *</label>
        <input id="installments" {...register("installments")} type="number" />

        <label htmlFor="mdr">Informe o percentual de MDR *</label>
        <input id="mdr" {...register("mdr")} type="number" />

        <label htmlFor="days">
          Informe os dias para saber seu recebimento *
        </label>
        <input id="days" {...register("days")} type="number" />
      </Form>
      <Aside>
        <h2>VOCÊ RECEBERÁ: </h2>
        <div></div>
        <span>
          Amanhã: <p>{totalAmount}</p>
        </span>
        <span>
          Em 15 dias: <p>A</p>
        </span>
        <span>
          Em 30 dias: <p>A</p>
        </span>
        <span>
          Em 90 dias: <p>A</p>
        </span>
      </Aside>
    </Container>
  );
};

export default Calculator;
