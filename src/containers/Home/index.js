import React from "react"

import HomeLogo from "../../assets/logoHome.png"
import { CaregoryCarousel, OfferCarousel } from "../../components"
import * as S from "./styles"

export function Home() {
  return (
    <>
      <S.Container>
        <S.HomeImg src={HomeLogo} alt="logo-home" />
        <CaregoryCarousel />
        <OfferCarousel />
      </S.Container>
    </>
  )
}
