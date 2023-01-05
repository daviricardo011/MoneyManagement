import { ButtonHTMLAttributes } from 'react';
import * as Style from './styles';

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
	text: string;
}; 
export const PrimaryButton = ({ text, ...props }: Props) => {
	return (
		<Style.Button {...props}>{text}</Style.Button>
	);
};