import { getShorthandedValue, spacingVars } from '@tapie-kr/inspire-react';
import { style } from '@vanilla-extract/css';

export const base = style({
  padding: getShorthandedValue(spacingVars.large, spacingVars.base),
});

export const container = style({
  maxWidth: 1000,
});
