import { spacingVars } from '@tapie-kr/inspire-react';
import { style } from '@vanilla-extract/css';

export const base = style({
  position: 'relative',
});

export const breadcrumb = style({
  position: 'absolute',
  top: spacingVars.large,
  zIndex: 1,
});
