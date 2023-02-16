import React from "react";
import HomeLogo from "../../assets/logoHome.png";

import * as S from "./styles";

import {CaregoryCarousel, OfferCarousel} from "../../components"

export function Home() {
  return (
    <>
      <S.Container>
        <S.HomeImg src={HomeLogo} alt="logo-home" />
        <CaregoryCarousel/>
        <OfferCarousel/>
      </S.Container>
    </>
  );
}
