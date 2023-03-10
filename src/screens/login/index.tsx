import { Input } from "../../components/forms/input";
import { PrimaryButton } from "../../components/forms/primaryButton";
import { TitleCard } from "../../components/texts/titleCard";
import * as Style from "./styles";
import { useNavigate } from 'react-router-dom';
import { useForm } from "react-hook-form";
import { useContext } from "react";
import AuthContext from "../../contexts/authContext";
import LoadingContext from "../../contexts/loadingContext";

type FormData = {
  username: string;
  password: string;
};
export const LoginScreen = () => {
  const { register, handleSubmit } = useForm<FormData>();
  const { handleSignIn } = useContext(AuthContext);
  const { loading } = useContext(LoadingContext);
  const navigate = useNavigate();

  const onSubmit = handleSubmit(data => {
    handleSignIn(data);
    navigate('/');
    window.location.href = window.location.href;
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
                <Input label="Senha" type="password" name="password" register={register} required/>
                <div className="buttons">
                  <PrimaryButton text="Entrar" type="submit" />
                  <a href="/register">Novo usuário</a>
                </div>
              </form>
            </>
          )
        }
      </Style.InputsContainer>
    </Style.Container>
  );
};