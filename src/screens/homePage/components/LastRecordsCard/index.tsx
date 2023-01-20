import { ButtonHTMLAttributes, useEffect, useState } from 'react';
import SalaryIcon from "../../../../assets/icons/salary.svg";
import TransportIcon from "../../../../assets/icons/transport.svg";
import * as Style from './styles';

export interface RecordType {
  category: string,
  date: string,
  description: string,
  value: string
}

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  records: RecordType[]
};
export const LastRecordsCard = ({ records }: Props) => {

  const getCategoryIcon = (category: string) => {
    const icon: { [icon: string]: any } = {
      'Salário': SalaryIcon,
      'Transporte': TransportIcon,
    };

    const type: string = icon[category];
    return type;
  }
  return (
    <Style.CardContainer>
      <Style.Title>Últimos registros</Style.Title>
      <Style.Content>
        {
          records.map(item => (
            <Style.Record>
              <img
                src={getCategoryIcon(item.category)}
                alt="Ícone de dinheiro que indica a categoria salário"
                className='categoryIcon'
              />
              <div className='categoryAndDescription'>
                <span>{item.category}</span>
                <span>{item.description}</span>
              </div>
              <div className='dateAndValue'>
                <span>{item.date}</span>
                <span>{item.value}</span>
              </div>
            </Style.Record>
          ))
        }
      </Style.Content>
    </Style.CardContainer>
  );
};