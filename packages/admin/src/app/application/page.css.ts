import { colorVars, radiusVars, spacingVars } from '@tapie-kr/inspire-react';

import { style } from '@vanilla-extract/css';

export const title = style({ cursor: 'pointer' });

export const dialog = style({
  width:        300,
  borderRadius: radiusVars.smooth,
  background:   colorVars.surface.default,
  padding:      spacingVars.base,
});
