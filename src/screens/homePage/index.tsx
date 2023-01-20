// import * as Style from "./styles";
import { LastRecordsCard, RecordType } from "./components/LastRecordsCard";
import { MonthlyTotalCard } from "./components/monthlyTotalCard";
import * as Style from './styles';

const records: RecordType[] = [
  {category: 'Salário', date: '19/12/2022', description: 'Pagamento do salário do emprego', value: 'R$100,00'},
  {category: 'Transporte', date: '19/12/2022', description: 'Viagem de uber de volta pra casa, saindo o centro', value: 'R$100,00'},
  {category: 'Salário', date: '19/12/2022', description: 'Pagamento do salário do emprego', value: 'R$100,00'},
  {category: 'Transporte', date: '19/12/2022', description: 'Viagem de uber de volta pra casa, saindo o centro', value: 'R$100,00'},
  {category: 'Salário', date: '19/12/2022', description: 'Pagamento do salário do emprego', value: 'R$100,00'},
  {category: 'Transporte', date: '19/12/2022', description: 'Viagem de uber de volta pra casa, saindo o centro', value: 'R$100,00'},
  {category: 'Salário', date: '19/12/2022', description: 'Pagamento do salário do emprego', value: 'R$100,00'},
  {category: 'Transporte', date: '19/12/2022', description: 'Viagem de uber de volta pra casa, saindo o centro', value: 'R$100,00'},
  {category: 'Salário', date: '19/12/2022', description: 'Pagamento do salário do emprego', value: 'R$100,00'},
  {category: 'Transporte', date: '19/12/2022', description: 'Viagem de uber de volta pra casa, saindo o centro', value: 'R$100,00'},
  {category: 'Salário', date: '19/12/2022', description: 'Pagamento do salário do emprego', value: 'R$100,00'},
  {category: 'Transporte', date: '19/12/2022', description: 'Viagem de uber de volta pra casa, saindo o centro', value: 'R$100,00'}
];

export const HomeScreen = () => {
  return (
    <Style.Container>
      <MonthlyTotalCard earnings={"R$30.000,00"} spending={"R$20.000,00"} limit={"red"} actualMoney={"R$10.000,00"} />
      <LastRecordsCard records={records}/>
    </Style.Container>
  );
};