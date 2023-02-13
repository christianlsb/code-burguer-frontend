import React from "react";
import HomeLogo from "../../assets/logoHome.png";

import * as S from "./styles";

import CaregoryCarousel from "../../components/CaregoryCarousel";


export default function Home() {
  return (
    <>
      <S.Container>
        <S.HomeImg src={HomeLogo} alt="logo-home" />
        <CaregoryCarousel/>
      </S.Container>
    </>
  );
}
