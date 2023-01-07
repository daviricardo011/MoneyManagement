import { Input } from "../../components/forms/input";
import { PrimaryButton } from "../../components/forms/primaryButton";
import { TitleCard } from "../../components/texts/titleCard";
import * as Style from "./styles";
import { useNavigate } from 'react-router-dom';
import { useForm } from "react-hook-form";
import { userAuthentication } from "../../data/apiSimulations/login/loginData";
import { useState } from "react";

type FormData = {
  username: string;
  password: string;
};
export const LoginScreen = () => {
  const { register, handleSubmit } = useForm<FormData>();
  const navigate = useNavigate();
  const [loading, setLoading] = useState<boolean>(false);

  const onSubmit = handleSubmit(data => {
    setLoading(true);
    setTimeout(() => {
      if (
        userAuthentication.username === data.username &&
        userAuthentication.password === data.password
      ) {
        navigate('/home');
      } else {
        alert('Dados inválidos!');
      }
      setLoading(false);
    }, 2000);
  });

  return (
    <Style.Container>
      <Style.InputsContainer>
        {
          loading ? (
            <>
              <TitleCard title="Verificando dados" subtitle="Por favor, aguarde" />
              <p>Carregando</p>
            </>
          ) : (
            <>
              <TitleCard title="Entrar no sistema" subtitle="Insira seus dados para acessar" />
              <form onSubmit={onSubmit}>
                <Input label="Nome de usuário" name="username" register={register} required />
                <Input label="Senha" type="password" name="password" register={register} />
                <PrimaryButton text="Entrar" type="submit" />
              </form>
            </>
          )
        }
      </Style.InputsContainer>
    </Style.Container>
  );
};