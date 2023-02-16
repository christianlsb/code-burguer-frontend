import React from "react";
import * as S from "./styles";

export function Button({ children, ...rest }) {
  return (
    <div>
      <S.Button {...rest}>{children}</S.Button>
    </div>
  );
}
