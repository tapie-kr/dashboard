import { colorVars, getShorthandedValue, radiusVars, spacingVars } from '@tapie-kr/inspire-react';
import { style } from '@vanilla-extract/css';

export const card = style({
  width: 190,
  border: getShorthandedValue('1px', 'solid', colorVars.line.border),
  borderRadius: radiusVars.smooth,
  background: colorVars.surface.default,
  padding: spacingVars.base,
});
