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
    width:        300,
    padding:      spacingVars.petite,
    borderRadius: radiusVars.smooth,
    border:       getShorthandedValue('1px', 'solid', colorVars.line.border),
    background:   colorVars.surface.default,
  },
]);

export const image = style({
  overflow:     'hidden',
  borderRadius: radiusVars.full,
});
