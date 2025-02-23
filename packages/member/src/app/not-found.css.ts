import { colorVars } from '@tapie-kr/inspire-react';

import { style } from '@vanilla-extract/css';

export const base = style({
  background: colorVars.surface.default,
  position:   'relative',
});

export const footer = style({
  position: 'absolute',
  bottom:   24,
  color:    colorVars.content.muted,
});
