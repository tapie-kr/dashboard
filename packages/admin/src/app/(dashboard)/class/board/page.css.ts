import { colorVars, radiusVars } from '@tapie-kr/inspire-react';

import { style } from '@vanilla-extract/css';

export const circle = style({
  width:        22,
  height:       22,
  borderRadius: radiusVars.full,
  background:   colorVars.surface.raised,
});
