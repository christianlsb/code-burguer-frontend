import PropTypes from "prop-types"
import React from "react"

import { Button } from "../../components"
import { useCart } from "../../hooks/CartContext"
import * as S from "./styles"

export function CardProduct({ product }) {
  const { putProductsInCart } = useCart()

  return (
    <>
      <S.Container>
        <S.Image src={product.url} alt="image-product" />
        <div>
          <S.NameProduct>{product.name}</S.NameProduct>
          <S.ValueProduct>{product.formatCurrency}</S.ValueProduct>
          <Button onClick={() => putProductsInCart(product)}>Adicionar</Button>
        </div>
      </S.Container>
    </>
  )
}

CardProduct.propTypes = {
  product: PropTypes.shape({
    name: PropTypes.string.isRequired,
    formatCurrency: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired
  }).isRequired
}
