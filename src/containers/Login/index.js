import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import Button from "../../components/Button";
import * as S from "./styles";

import LoginImg from "../../assets/hmg.svg";
import LogoLogin from "../../assets/burger.svg";

const schema = yup
  .object({
    email: yup.string().email("Digite um email válido").required("O email é obrigatório"),
    password: yup.string().required("A senha é obrigatória").min(6, "A senha deve conter no minimo 6 caracteres"),
  })
  .required();

export default function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const onSubmit = (data) => console.log(data);
  return (
    <S.Container>
      <S.LoginImage src={LoginImg} alt="login-img"/>
      <S.ContainerItens>
        <img src={LogoLogin}  alt="logo-img"/>
        <S.Title>Login</S.Title>
        <form noValidate onSubmit={handleSubmit(onSubmit)}>
          <S.P>Email</S.P>
          <S.Input type={"email"} {...register("email")} error={errors.email?.message}/>
          <S.ErrorMassage>{errors.email?.message}</S.ErrorMassage>
          <S.P>Senha</S.P>
          <S.Input type={"password"} {...register("password")} error={errors.password?.message}/>
          <S.ErrorMassage>{errors.password?.message}</S.ErrorMassage>
          <Button isLogin={true}>Entrar</Button>
        </form>
        <S.SingInLink>
          Não possui conta ? <a href="/">SingUp</a>
        </S.SingInLink>
      </S.ContainerItens>
    </S.Container>
  );
}
