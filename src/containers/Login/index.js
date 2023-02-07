import React from "react";
import Button from "../../components/Button";
import * as S from "./styles";

export default function Login() {
  return (
    <S.Container>
      <S.Background />
      <S.ContainerItens>
        <img />
        <h1>Login</h1>
        <S.P>Email</S.P>
        <S.Input />
        <S.P>Senha</S.P>
        <S.Input />
       <Button>Entrar</Button>
        <S.SingInLink>
          Não possui conta ? <a>SingUp</a>
        </S.SingInLink>
      </S.ContainerItens>
    </S.Container>
  );
}
