import React from "react";
import Button from "../../components/Button";
import * as S from "./styles";

import LoginImg from "../../assets/hmg.svg";
import LogoLogin from "../../assets/burger.svg"

export default function Login() {
  return (
    <S.Container>
      <S.LoginImage src={LoginImg} />
      <S.ContainerItens>
        <img src={LogoLogin}/>
        <S.Title>Login</S.Title>
        <S.P>Email</S.P>
        <S.Input />
        <S.P>Senha</S.P>
        <S.Input />
        <Button isLogin={true}>Entrar</Button>
        <S.SingInLink>
          Não possui conta ? <a href="/">SingUp</a>
        </S.SingInLink>
      </S.ContainerItens>
    </S.Container>
  );
}
