import { InputHTMLAttributes, LegacyRef } from 'react';
import { UseFormRegister } from 'react-hook-form';
import * as Style from './styles';

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  label: string;
  register: UseFormRegister<any>;
  required?: boolean;
}

export const Input = ({ name, label, register, required, ...props }: Props) => {
  return (
    <Style.InputContainer>
      <label>{label}</label>
      <input {...register(name, { required })} {...props} />
    </Style.InputContainer>
  );
};