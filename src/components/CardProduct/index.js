import React from 'react';

import * as S from "./styles"

import Button from "../Button"
import formatCurrency from '../../utils/formatCurrency';

export default function CardProduct({product}) {
 return (
   <>
      <S.Container>
        <S.Image src={product.url} alt="image-product"/>
        <div> 
        <S.NameProduct>{product.name}</S.NameProduct>
        <S.ValueProduct>{formatCurrency(product.price)}</S.ValueProduct>
       <Button>Adicionar</Button>
        </div>
      </S.Container>
   </>
 );
}