import { colorVars } from "@tapie-kr/inspire-react";
import { style } from "@vanilla-extract/css";

export const container = style({
    width: 300,
});

export const footer = style({
  position: 'absolute',
  bottom: 24,
  color: colorVars.content.muted,
});