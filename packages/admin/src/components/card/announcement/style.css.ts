import { colorVars, getShorthandedValue, radiusVars, spacingVars } from '@tapie-kr/inspire-react';
import { style } from '@vanilla-extract/css';

export const base = style({
  width: 300,
  padding: spacingVars.base,
  borderRadius: radiusVars.smooth,
  border: getShorthandedValue('1px', 'solid', colorVars.line.border),
  background: colorVars.surface.default,
});
