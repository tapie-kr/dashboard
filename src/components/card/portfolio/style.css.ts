import { colorVars, getShorthandedValue, radiusVars, spacingVars } from '@tapie-kr/inspire-react';
import { style } from '@vanilla-extract/css';

export const base = style({
  width: 250,
  padding: spacingVars.base,
  borderRadius: radiusVars.smooth,
  border: getShorthandedValue('1px', 'solid', colorVars.line.border),
  background: colorVars.surface.default,
});

export const image = style({
  aspectRatio: '16 / 9',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  borderRadius: radiusVars.subtle,
  // background: colorVars.surface.raised,
});
