import { ButtonHTMLAttributes, useEffect, useState } from 'react';
import EntradasIcon from "../../../../assets/icons/entradas.svg";
import SaidasIcon from "../../../../assets/icons/saidas.svg";
import * as Style from './styles';

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  earnings: string;
  spending: string;
  limit: string;
  actualMoney: string;
};
export const MonthlyTotalCard = ({ earnings, spending, limit, actualMoney }: Props) => {
  const [daysRemaining, setDayRemaining] = useState<number>(0);

  useEffect(() => {
    const actualDate = new Date();
    const lastDayInMonth = new Date(actualDate.getFullYear(), actualDate.getMonth() + 1, 0);
    const timeDiff = Math.abs(lastDayInMonth.getTime() - actualDate.getTime());
    var diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24)); 
    setDayRemaining(diffDays)
  }, []);

  return (
    <Style.CardContainer>
      <Style.TitleDiv>
        <Style.Title>Total mensal</Style.Title>
        <Style.Caption>Último registros</Style.Caption>
      </Style.TitleDiv>
      <Style.Resume>
        <div className='earnings'>
          <div className='icon'><img src={EntradasIcon} alt="Ícone de dinheiro com um sinal de soma" /></div>
          <div>
            <Style.Title>{earnings}</Style.Title>
            <Style.Caption>Entradas</Style.Caption>
          </div>
        </div>
        <div className='line' />
        <div className='spending'>
          <div className='icon'><img src={SaidasIcon} alt="Ícone de dinheiro com um sinal de subtração" /></div>
          <div>
            <Style.Title>{spending}</Style.Title>
            <Style.Caption>Saídas</Style.Caption>
          </div>
        </div>
      </Style.Resume>
      <Style.CardText>Restam {daysRemaining} dias para o final do mês e você deve ter um total de {actualMoney} em sua conta.</Style.CardText>
      {
        limit === 'green' && <Style.CardMessage type="green">Você está indo bem!</Style.CardMessage>
      }
      {
        limit === 'red' && <Style.CardMessage type="red">Passou do limite de gastos!</Style.CardMessage>
      }
      { 
        limit === 'yellow' && <Style.CardMessage type="yellow">Evite gastos desnecessários!</Style.CardMessage>
      }
      
    </Style.CardContainer>
  );
};