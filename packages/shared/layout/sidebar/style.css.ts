import { colorVars, getShorthandedValue, spacingVars } from '@tapie-kr/inspire-react';

import { style } from '@vanilla-extract/css';

export const base = style({
  padding:     spacingVars.micro,
  borderRight: getShorthandedValue('1px', 'solid', colorVars.line.border),
  background:  colorVars.surface.default,
  zIndex:      99999,

  display:        'flex',
  flexDirection:  'column',
  justifyContent: 'space-between',
  alignItems:     'center',

  height: '100%',

  gap: spacingVars.base,
});

export const logo = style({ cursor: 'pointer' });

export const header = style({
  width:          '100%',
  display:        'flex',
  justifyContent: 'space-between',
  alignItems:     'center',
  padding:        spacingVars.micro,
});

export const footer = style({ padding: spacingVars.micro });
export const info = style({ padding: getShorthandedValue(0, spacingVars.mini) });
