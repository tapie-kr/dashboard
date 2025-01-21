import { getShorthandedValue, spacingVars } from '@tapie-kr/inspire-react';
import { style } from '@vanilla-extract/css';

export const base = style({
  cursor: 'pointer',
  padding: getShorthandedValue(spacingVars.mini, spacingVars.moderate),
});
