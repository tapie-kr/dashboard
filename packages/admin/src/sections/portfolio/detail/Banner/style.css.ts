import { radiusVars, spacingVars } from '@tapie-kr/inspire-react';

import { style } from '@vanilla-extract/css';

export const base = style({
  width:    694,
  height:   250,
  position: 'relative',
});

export const content = style({
  position: 'absolute',
  bottom:   spacingVars.moderate,
  left:     spacingVars.moderate,
  zIndex:   2,
});

export const imageContainer = style({
  borderRadius: radiusVars.smooth,
  overflow:     'hidden',
  '::before':   {
    content:        '""',
    position:       'absolute',
    top:            0,
    left:           0,
    display:        'block',
    zIndex:         1,
    width:          '100%',
    height:         '100%',
    backdropFilter: 'blur(4px)',
  },
});

export const image = style({ position: 'relative' });
