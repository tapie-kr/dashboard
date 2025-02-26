import {
  colorVars,
  getShorthandedValue,
  radiusVars,
  spacingVars,
  utilityClass,
} from '@tapie-kr/inspire-react';

import { style } from '@vanilla-extract/css';

export const base = style([
  utilityClass.interactive,
  {
    width:        250,
    padding:      spacingVars.base,
    background:   colorVars.surface.default,
    border:       getShorthandedValue('1px', 'solid', colorVars.line.border),
    borderRadius: radiusVars.smooth,
  },
]);
