import Calculator from "./components/calculatorPage";
import { CalculatorProvider } from "./contexts/CalculatorContext";

function App() {
  return (
    <CalculatorProvider>
      <Calculator></Calculator>
    </CalculatorProvider>
  );
}

export default App;
