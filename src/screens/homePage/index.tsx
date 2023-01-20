// import * as Style from "./styles";
import { MonthlyTotalCard } from "./components/monthlyTotalCard";

export const HomeScreen = () => {
  return (
    <div>
      <MonthlyTotalCard earnings={"R$30.000,00"} spending={"R$20.000,00"} limit={"yellow"} actualMoney={"R$10.000,00"} />
    </div>
  );
};