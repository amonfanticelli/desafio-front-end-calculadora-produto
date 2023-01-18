import { useContext } from "react";
import { useForm } from "react-hook-form";
import { ICalculator } from "../../interfaces";
import { yupResolver } from "@hookform/resolvers/yup";
import { CalculatorContext } from "../../contexts/CalculatorContext";
import { calculatorSchema } from "../../schema/calculatorSchema";

const Calculator = () => {
  const {} = useContext(CalculatorContext);
  const { register, handleSubmit } = useForm<ICalculator>({
    resolver: yupResolver(calculatorSchema),
  });
  return (
    <div>
      <form>
        <h1>Simule sua Antecipação</h1>

        <label htmlFor="price">Informe o valor da venda *</label>
        <input
          id="price"
          placeholder="Digite aqui seu login"
          {...register("price")}
          type="number"
        />

        <label htmlFor="installments">Em quantas parcelas *</label>
        <input
          id="installments"
          placeholder="Digite aqui sua senha"
          {...register("installments")}
          type="number"
        />

        <label htmlFor="mdr">Informe o percentual de MDR *</label>
        <input
          id="mdr"
          placeholder="Digite aqui sua senha"
          {...register("mdr")}
          type="number"
        />
      </form>
      <aside>
        <h2>VOCÊ RECEBERÁ </h2>
        <div> </div>
        <span>
          Amanhã: <p></p>
        </span>
        <span>
          Em 15 dias: <p></p>
        </span>
        <span>
          Em 30 dias: <p></p>
        </span>
        <span>
          Em 90 dias: <p></p>
        </span>
      </aside>
    </div>
  );
};

export default Calculator;
