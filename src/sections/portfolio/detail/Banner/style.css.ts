import { spacingVars } from '@tapie-kr/inspire-react';
import { style } from '@vanilla-extract/css';

export const base = style({
  width: 694,
  height: 250,
  position: 'relative',
});

export const content = style({
  position: 'absolute',
  bottom: spacingVars.moderate,
  left: spacingVars.moderate,
});
