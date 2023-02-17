import React from 'react';

import * as S from "./styles"

import {Button} from "../../components"

import { useCart } from '../../hooks/CartContext';

export function CardProduct({product}) {
  const { putProductsInCart } = useCart()

 return (
  
   <>
      <S.Container>
        <S.Image src={product.url} alt="image-product"/>
        <div> 
        <S.NameProduct>{product.name}</S.NameProduct>
        <S.ValueProduct>{product.formatCurrency}</S.ValueProduct>
       <Button onClick={() => putProductsInCart (product)}>Adicionar</Button>
        </div>
      </S.Container>
   </>
 );
}