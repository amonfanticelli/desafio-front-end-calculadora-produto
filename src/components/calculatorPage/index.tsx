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
        <div>
          <label htmlFor="days15">15</label>
          <input
            className="checkBox"
            id="days15"
            {...register("days")}
            value={15}
            type="checkbox"
          />
          <label htmlFor="days30"> 30</label>
          <input
            className="checkBox"
            id="days30"
            {...register("days")}
            value={30}
            type="checkbox"
          />
        </div>
        <div>
          <label htmlFor="days45">45</label>
          <input
            className="checkBox"
            id="days45"
            {...register("days")}
            value={45}
            type="checkbox"
          />
          <label htmlFor="days60">60</label>
          <input
            className="checkBox"
            id="days60"
            {...register("days")}
            value={60}
            type="checkbox"
          />
        </div>
      </Form>
      <Aside>
        <h2>VOCÊ RECEBERÁ: </h2>
        <div></div>
        <span>
          Total: <p>{totalAmount}</p>
        </span>
      </Aside>
    </Container>
  );
};

export default Calculator;
