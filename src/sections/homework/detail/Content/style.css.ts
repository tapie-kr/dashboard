import { colorVars, radiusVars, spacingVars } from '@tapie-kr/inspire-react';
import { style } from '@vanilla-extract/css';

export const detail = style({
  width: 600,
  background: colorVars.surface.clear,
  borderRadius: radiusVars.smooth,
  padding: spacingVars.base,
});

export const fileUpload = style({
  width: 250,
});
