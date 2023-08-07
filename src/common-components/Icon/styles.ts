import { css } from "@emotion/react";
import { CSSInterpolation } from "@emotion/serialize";

export const container = ({ styles }: Props) => css`
  & > div {
    display: flex;
  }

  svg {
    ${styles};
  }
`;

type Props = {
  styles?: CSSInterpolation;
};
