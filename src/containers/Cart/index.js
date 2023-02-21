import React from "react";

import * as S from "./styles";

import BackgorundCart from "../../assets/bgCart.svg";

import { useCart } from "../../hooks/CartContext";

import formatCurrency from "../../utils/formatCurrency"

export function Cart() {
  const { cartProdcuts } = useCart();
  console.log(cartProdcuts);

  return (
    <>
      <S.Container>
        <S.BgCart src={BackgorundCart} />
        <S.Header>
          <p>Itens</p>
          <p>Preço</p>
          <p>Quantidade</p>
          <p>Total</p>
        </S.Header>
        {cartProdcuts &&
          cartProdcuts.map((product) => (
            <S.Body key={product.id}>
              <img src={product.url} alt="Img_Prodcut" />
              <p>{product.name}</p>
              <p>{product.price}</p>
              <p>{formatCurrency(product.quantity * product.price)}</p>
            </S.Body>
          ))}
      </S.Container>
    </>
  );
}
