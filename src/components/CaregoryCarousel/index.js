import React, { useEffect } from "react";

import * as S from "./styles";

import CategoryImage from "../../assets/CATEGORIAS.png";

import api from "../../services/api";

export default function CaregoryCarousel() {
  useEffect(() => {
    async function loadCategories(){
      const response = await api.get("categories")

      console.log(response)
    }
    loadCategories()
  }, []);

  return (
    <>
      <S.CategoryImg src={CategoryImage} alt="img-category" />
    </>
  );
}
