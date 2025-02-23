import { colorVars, radiusVars, spacingVars } from '@tapie-kr/inspire-react';

import { style } from '@vanilla-extract/css';

export const base = style({
  padding:      spacingVars.base,
  borderRadius: radiusVars.smooth,
  background:   colorVars.surface.clear,
});

export const label = style({ width: 120 });
export const content = style({ width: 700 });
