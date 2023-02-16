import React, { useEffect, useState } from "react";

import * as S from "./styles";

import OfferImage from "../../assets/OFERTAS.png";

import api from "../../services/api";

import Carousel from "react-elastic-carousel";

import formatCurrency from "../../utils/formatCurrency";

export function OfferCarousel() {
  const [offers, setOffers] = useState([]);

  useEffect(() => {
    async function loadOffers() {
      const { data } = await api.get("products");

      const offerFiltter = data
        .filter((product) => product.offer)
        .map((product) => {
          return { ...product, formatedPrice: formatCurrency(product.price) };
        });

      setOffers(offerFiltter);
    }

    loadOffers();
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
        <S.OfferImg src={OfferImage} alt="img-category" />

        <Carousel
          itemsToShow={4}
          style={{ width: "90%" }}
          breakPoints={breakPoints}
        >
          {offers &&
            offers.map((product) => (
              <S.ContainerOffer key={product.id}>
                <S.ImageOffer src={product.url} alt={"file name product"} />
                <S.NameOffer>{product.name}</S.NameOffer>
                <S.ValueOffer>{product.formatedPrice}</S.ValueOffer>
                <S.Button>Peça agora</S.Button>
              </S.ContainerOffer>
            ))}
        </Carousel>
      </S.Container>
    </>
  );
}
