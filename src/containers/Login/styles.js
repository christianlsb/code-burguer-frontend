import styled from "styled-components";
import Background from "../../assets/bg.svg";
import { themes } from "../../styles/theme";

export const Container = styled.div`
  height: 100vh;
  width: 100vw;
  background-image: url(${Background});
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const LoginImage = styled.img`
  height: 70%;
`;

export const ContainerItens = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  background: ${themes.colors.WhiteAlpha_50};
  box-shadow: 0px 4px 15px rgba(74, 144, 226, 0.24);
  height: 70%;
  border-radius: 0 10px 10px 0;
  padding: 25px 75px;
`;

export const Title = styled.h1`
  font-weight: ${themes.fontWeights.medium};
  font-size: ${themes.fontSizes["2xl"]};
  line-height: ${themes.lineHeights[7]};
  color: ${themes.colors.white};
  text-align: center;
  margin-top: 119px;
`;

export const P = styled.p`
  font-weight: ${themes.fontWeights.medium};
  font-size: ${themes.fontSizes.xs};
  line-height: ${themes.fontWeights[3]};
  color: ${themes.colors.white};
  margin-top: 28px;
  margin-bottom: 3px;
`;

export const Input = styled.input`
  width: 391.42px;
  height: 38.32px;
  background: ${themes.colors.white};
  box-shadow: 3px 3px 10px rgba(74, 144, 226, 0.19);
  border-radius: 5px;
  outline: none;
  padding-left: 12px;
  border: none;
`;

export const SingInLink = styled.p`
  font-weight: ${themes.fontWeights.normal};
  font-size: ${themes.fontSizes.sm};
  color: ${themes.colors.white};
  margin-top: 28px;
  a {
    color: ${themes.colors.white};
  }
`;
