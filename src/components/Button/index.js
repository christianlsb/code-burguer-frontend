import React from 'react';
import * as S from './styles';

export default function Button({children}) {
 return (
   <div>
        <S.Button>{children}</S.Button>
   </div>
 );
}