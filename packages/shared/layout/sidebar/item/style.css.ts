import {
  colorVars,
  getShorthandedValue,
  radiusVars,
  spacingVars,
  utilityClass,
} from '@tapie-kr/inspire-react';

import { style } from '@vanilla-extract/css';

export const base = style({});

export const button = style([
  utilityClass.interactive,
  {
    padding:      spacingVars.micro,
    borderRadius: radiusVars.subtle,
  },
]);

export const active = style({ background: colorVars.surface.elevated });
export const titleContainer = style({ padding: getShorthandedValue(0, spacingVars.tiny) });
export const subItems = style({ padding: getShorthandedValue(spacingVars.mini, 0) });
