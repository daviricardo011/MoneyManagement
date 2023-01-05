import { Input } from "../../components/forms/input";
import { PrimaryButton } from "../../components/forms/primaryButton";
import { TitleCard } from "../../components/texts/titleCard";
import * as Style from "./styles";
import { useNavigate } from 'react-router-dom';

export const LoginScreen = () => {
  const navigate = useNavigate();
	return (
			<Style.Container>
					<Style.InputsContainer>
							<TitleCard title="Entrar no sistema" subtitle="Insira seus dados para acessar"/>
							<div>
									<Input label="Nome de usuário" type="text"/>
									<Input label="Senha" type="password" />
							</div>
							<PrimaryButton text="Entrar" onClick={() => navigate('/home')}/>
					</Style.InputsContainer>
			</Style.Container>
	);
};