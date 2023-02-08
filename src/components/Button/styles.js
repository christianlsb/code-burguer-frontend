import styled from "styled-components";
import { themes } from "../../styles/theme";

export const Button = styled.button`
  width: 182.81px;
  height: 36.13px;
  background-color: ${themes.colors.purple_600};
  border-radius: 20px;
  border: none;
  outline: none;
  cursor: pointer;
  color: ${themes.colors.white};
  font-weight: ${themes.fontWeights.medium};
  font-size: ${themes.fontSizes.md};
  line-height: ${themes.lineHeights[6]};
  text-align: center;
  ${props => props.isLogin && `margin-top: 68px;`}
`;
