import React from 'react';
import * as S from './styles';

export default function Button({children,isLogin}) {
 return (
   <div>
        <S.Button isLogin={isLogin}>{children}</S.Button>
   </div>
 );
}