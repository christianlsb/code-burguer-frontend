import React from "react"

import BackgorundCart from "../../assets/bgCart.svg"
import { useCart } from "../../hooks/CartContext"
import formatCurrency from "../../utils/formatCurrency"
import * as S from "./styles"

export function Cart() {
  const { cartProdcuts, incrementProduct, decrementProduct } = useCart()
  console.log(cartProdcuts)

  return (
    <>
      <img src={BackgorundCart} style={{ width: "100%" }} alt="img-bg" />
      <S.Container>
        <S.Header>
          <p></p>
          <p>Itens</p>
          <p>Preço</p>
          <p>Quantidade</p>
          <p>Total</p>
        </S.Header>
        {cartProdcuts && cartProdcuts.length > 0 ? (
          cartProdcuts.map(product => (
            <S.Body key={product.id}>
              <img src={product.url} alt="Img_Prodcut" />
              <p>{product.name}</p>
              <p>{product.formatCurrency}</p>
              <div className="quantity-container">
                <button onClick={() => decrementProduct(product.id)}>-</button>
                <p>{product.quantity}</p>
                <button onClick={() => incrementProduct(product.id)}>+</button>
              </div>
              <p>{formatCurrency(product.quantity * product.price)}</p>
            </S.Body>
          ))
        ) : (
          <S.EmptyCard>Cart empty</S.EmptyCard>
        )}
      </S.Container>
    </>
  )
}
