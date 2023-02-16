import React from 'react';

import * as S from "./styles"

import Button from "../Button"

export default function CardProduct({product}) {
 return (
   <>
      <S.Container>
        <S.Image src={product.url} alt="image-product"/>
        <div> 
        <S.NameProduct>{product.name}</S.NameProduct>
        <S.ValueProduct>{product.formatCurrency}</S.ValueProduct>
       <Button>Adicionar</Button>
        </div>
      </S.Container>
   </>
 );
}