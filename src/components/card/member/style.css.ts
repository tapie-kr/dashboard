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
    width: 300,
    padding: spacingVars.base,
    borderRadius: radiusVars.default,
    border: getShorthandedValue('1px', 'solid', colorVars.line.border),
  },
]);

export const circle = style({
  width: 60,
  height: 60,
  borderRadius: radiusVars.full,
  backgroundColor: colorVars.surface.raised,
});
