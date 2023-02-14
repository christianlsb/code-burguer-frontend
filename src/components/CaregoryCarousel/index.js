import React, { useEffect, useState } from "react";

import * as S from "./styles";

import CategoryImage from "../../assets/CATEGORIAS.png";

import api from "../../services/api";

import Carousel from "react-elastic-carousel";

export default function CaregoryCarousel() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    async function loadCategories() {
      const { data } = await api.get("categories");

      setCategories(data);
    }

    loadCategories();
  }, []);

  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2, itemsToScroll: 2, pagination: false },
    { width: 850, itemsToShow: 3 },
    { width: 1150, itemsToShow: 4, itemsToScroll: 2 },
    { width: 1450, itemsToShow: 5 },
    { width: 1750, itemsToShow: 6 },
  ];

  return (
    <>
      <S.Container>
        <S.CategoryImg src={CategoryImage} alt="img-category" />

        <Carousel
          itemsToShow={4}
          style={{ width: "90%" }}
          breakPoints={breakPoints}
        >
          {categories &&
            categories.map((category) => (
              <S.ContainerCategory key={category.id}>
                <S.ImageCategory
                  src={category.url}
                  alt={"file name category"}
                />
                <S.Button>{category.name}</S.Button>
              </S.ContainerCategory>
            ))}
        </Carousel>
      </S.Container>
    </>
  );
}
