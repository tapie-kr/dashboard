import { colorVars, radiusVars, spacingVars } from '@tapie-kr/inspire-react';

import { style } from '@vanilla-extract/css';

export const base = style({
  width: 300, background: colorVars.surface.default, borderRadius: radiusVars.smooth, padding: spacingVars.micro,
});
