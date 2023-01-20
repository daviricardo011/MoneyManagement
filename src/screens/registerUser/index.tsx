import { Input } from "../../components/forms/input";
import { PrimaryButton } from "../../components/forms/primaryButton";
import { TitleCard } from "../../components/texts/titleCard";
import * as Style from "../login/styles";
import { useNavigate } from 'react-router-dom';
import { useForm } from "react-hook-form";
import { useContext } from "react";
import LoadingContext from "../../contexts/loadingContext";

type FormData = {
  fullName: string;
  username: string;
  password: string;
};
export const RegisterScreen = () => {
  const { register, handleSubmit } = useForm<FormData>();
  const { loading } = useContext(LoadingContext);
  const navigate = useNavigate();

  const onSubmit = handleSubmit(data => {
    console.log(data);
    navigate('/login');
  });

  return (
    <Style.Container>
      <Style.InputsContainer>
        {
          loading ? (
            <>
              <TitleCard title="Carregando" subtitle="Por favor, aguarde" />
              <p>Carregando</p>
            </>
          ) : (
            <>
              <TitleCard title="Novo usuário" subtitle="Insira seus dados para se cadastrar" />
              <form onSubmit={onSubmit}>
                <Input label="Nome completo" name="fullName" register={register} required />
                <Input label="Nome de usuário" name="username" register={register} required />
                <Input label="Senha" type="password" name="password" register={register} required />
                <PrimaryButton text="Cadastrar" type="submit" />
              </form>
            </>
          )
        }
      </Style.InputsContainer>
    </Style.Container>
  );
};