import { colorVars, getShorthandedValue, radiusVars, spacingVars } from '@tapie-kr/inspire-react';
import { style } from '@vanilla-extract/css';

export const base = style({
  width: 250,
  padding: spacingVars.base,
  borderRadius: radiusVars.smooth,
  border: getShorthandedValue('1px', 'solid', colorVars.line.border),
  background: colorVars.surface.default,
});

export const preview = style({
  borderRadius: radiusVars.subtle,
});

export const previewNoImage = style({
  background: colorVars.surface.raised,
});
