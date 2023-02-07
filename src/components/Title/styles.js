import styled from "styled-components";
import { themes } from "../../styles/theme";

export const Title = styled.h1`
  font-weight: ${themes.fontWeights.medium};
  font-size: ${themes.fontSizes["2xl"]};
  line-height: ${themes.lineHeights[7]};
  color: ${themes.colors.white};
`;
