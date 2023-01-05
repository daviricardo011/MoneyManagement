import { InputHTMLAttributes } from 'react';
import * as Style from './styles';

type Props = InputHTMLAttributes<HTMLInputElement> & {
    label: string;
    type: string;
}

export const Input = ({ label, type, ...props }: Props) => {
    return (
        <Style.InputContainer>
            <label>{label}</label>
            <input type={type} />
        </Style.InputContainer>
    );
};