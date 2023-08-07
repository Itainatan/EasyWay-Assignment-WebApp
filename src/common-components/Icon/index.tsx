import { Box, BoxProps, useTheme } from "@mui/material";
import _ from "lodash";
import { memo, useMemo } from "react";
import { CSSInterpolation } from "@emotion/serialize";
import { ReactSVG } from "react-svg";
import * as iconStyles from "./styles";

function Icon({ name, color, styles, ...rest }: Props) {
  const theme = useTheme();
  //   const src = new URL(`@src/assets/icons/${name}.svg`, import.meta.url).href;
  const src = new URL(`../../assets/icons/${name}.svg`, import.meta.url).href;
  const _styles = _.isFunction(styles) ? styles(theme) : styles;

  return (
    <Box
      component={SVGComponent}
      src={src}
      color={color}
      style={{ display: "block" }}
      css={iconStyles.container({ styles: _styles })}
      {...rest}
    />
  );
}

function SVGComponent({ src, ...rest }: { src: string }) {
  return <ReactSVG src={src} {...rest} />;
}

type Props = {
  name: string;
  color?: string;
  styles?: CSSInterpolation;
} & BoxProps;

export default memo(Icon);
