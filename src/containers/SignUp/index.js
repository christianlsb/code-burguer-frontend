import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import {Button} from "../../components";
import * as S from "./styles";

import LoginImg from "../../assets/hmgFire.svg";
import LogoLogin from "../../assets/burger.svg";

import api from "../../services/api";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";

export function SignUp() {
  const schema = yup
    .object({
      name: yup.string().required("O nome é obrigatório"),

      email: yup
        .string()
        .email("E-mail inválido")
        .required("O email é obrigatório"),

      password: yup
        .string()
        .required("A senha é obrigatória")
        .min(6, "A senha deve conter no minimo 6 caracteres"),

      confirmPwd: yup
        .string()
        .required("A senha é obrigatória")
        .oneOf([yup.ref("password")], "As senhas não são iguais"),
    })
    .required();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const onSubmit = async (clientData) => {
    try {
      const { status } = await api.post(
        "users",
        {
          name: clientData.name,
          email: clientData.email,
          password: clientData.password,
        },
        { validateStatus: () => true }
      );
      if (status === 201 || status === 200) {
        toast.success("Cadastro realizado");
      } else if (status === 409) {
        toast.error("E-mail já cadastrado! Faça login pra continuar");
      } else {
        throw new Error();
      }
    } catch (err) {
      toast.error("Falha no sistema! Tente novamente");
    }
  };

  return (
    <S.Container>
      <S.LoginImage src={LoginImg} alt="login-img" />
      <S.ContainerItens>
        <img src={LogoLogin} alt="logo-img" style={{ height: "80px" }} />
        <S.Title>Cadastre-se</S.Title>
        <form noValidate onSubmit={handleSubmit(onSubmit)}>
          <S.P>Nome</S.P>
          <S.Input
            type={"text"}
            {...register("name")}
            error={errors.name?.message}
          />
          <S.ErrorMassage>{errors.name?.message}</S.ErrorMassage>
          <S.P>Email</S.P>
          <S.Input
            type={"email"}
            {...register("email")}
            error={errors.email?.message}
          />
          <S.ErrorMassage>{errors.email?.message}</S.ErrorMassage>
          <S.P>Senha</S.P>
          <S.Input
            type={"password"}
            {...register("password")}
            error={errors.password?.message}
          />
          <S.ErrorMassage>{errors.password?.message}</S.ErrorMassage>
          <S.P>Confirmar Senha</S.P>
          <S.Input
            type={"password"}
            {...register("confirmPwd")}
            error={errors.confirmPwd?.message}
          />
          <S.ErrorMassage>{errors.confirmPwd?.message}</S.ErrorMassage>
          <Button style={{ marginTop: "28px" }}>Sign Up</Button>
        </form>
        <S.SingInLink>
          Já possui conta? <Link to="/">SignIn</Link>
        </S.SingInLink>
      </S.ContainerItens>
    </S.Container>
  );
}
