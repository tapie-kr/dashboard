import { colorVars, getShorthandedValue, spacingVars } from '@tapie-kr/inspire-react';
import { style } from '@vanilla-extract/css';

export const base = style({
  width: 250,
  padding: spacingVars.micro,
  borderRight: getShorthandedValue('1px', 'solid', colorVars.line.border),
  background: colorVars.surface.default,
  zIndex: 99999,
});

export const collapsed = style({
  width: 'fit-content',
});

export const logo = style({
  cursor: 'pointer',
});

export const header = style({
  padding: spacingVars.micro,
});

export const footer = style({
  padding: spacingVars.micro,
});

export const info = style({
  padding: getShorthandedValue(0, spacingVars.mini),
});
