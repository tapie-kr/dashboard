import {
  colorVars,
  getShorthandedValue,
  radiusVars,
  spacingVars,
  utilityClass,
} from '@tapie-kr/inspire-react';

import { style } from '@vanilla-extract/css';

export const award = style({
  padding:      spacingVars.petite,
  border:       getShorthandedValue('1px', 'solid', colorVars.line.border),
  borderRadius: radiusVars.rounded,
});

export const closeIcon = style([
  utilityClass.interactive,
  {
    marginLeft: spacingVars.micro,
    ':active':  { opacity: 0.5 },
  },
]);
