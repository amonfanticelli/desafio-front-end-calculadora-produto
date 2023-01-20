import { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { ICalculator } from "../../interfaces";
import { yupResolver } from "@hookform/resolvers/yup";
import { CalculatorContext } from "../../contexts/CalculatorContext";
import { calculatorSchema } from "../../schema/calculatorSchema";
import { Container, Form, Aside } from "./style";

const Calculator2 = () => {
  const [amount, setAmount] = useState("");
  const [installments, setInstallments] = useState("");
  const [mdr, setMdr] = useState("");
  const [tomorrow, setTomorrow] = useState("");

  const onAnyValueChange = (value: string, field: string) => {
    const parsedAmount = Number(field === "amount" ? value : amount);
    setTomorrow(String(parsedAmount));
  };

  useEffect(() => {
    onAnyValueChange(amount, "amount");
  }, [amount]);

  return (
    <Container>
      <Form>
        <h1>Simule sua Antecipação</h1>

        <label htmlFor="amount">Informe o valor da venda *</label>
        <input
          id="amount"
          value={amount}
          onChange={(event) => setAmount(event.target.value)}
          type="number"
        />

        <label htmlFor="installments">Em quantas parcelas *</label>
        <input
          id="installments"
          value={installments}
          onChange={(event) => setInstallments(event.target.value)}
          type="number"
        />

        <label htmlFor="mdr">Informe o percentual de MDR *</label>
        <input
          id="mdr"
          value={mdr}
          onChange={(event) => setMdr(event.target.value)}
          type="number"
        />
      </Form>
      <Aside>
        <h2>VOCÊ RECEBERÁ: </h2>
        <div></div>
        <span>
          Amanhã: <p>{tomorrow}</p>
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

export default Calculator2;
