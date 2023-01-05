import * as Style from './styles';

interface Props {
	title: string;
	subtitle?: string;
}

export const TitleCard = ({ title, subtitle }: Props) => {
	return (
			<Style.TitleContainer>
					<span className='title'>{title}</span>
					{subtitle && <span className='subtitle'>{subtitle}</span>}
			</Style.TitleContainer>
	);
}