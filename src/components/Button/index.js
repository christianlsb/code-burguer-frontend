import React from "react";
import * as S from "./styles";

export default function Button({ children, ...rest }) {
  return (
    <div>
      <S.Button {...rest}>{children}</S.Button>
    </div>
  );
}
