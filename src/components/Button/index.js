import React from "react";
import * as S from "./styles";
import PropTypes from "prop-types";

export default function Button({ children, ...rest }) {
  return (
    <div>
      <S.Button {...rest}>{children}</S.Button>
    </div>
  );
}

Button.propTypes = {
  children: PropTypes.string,
  isLogin: PropTypes.bool,
};
