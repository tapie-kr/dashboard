import { getShorthandedValue, spacingVars } from '@tapie-kr/inspire-react';
import { style } from '@vanilla-extract/css';

export const titleContainer = style({
  padding: getShorthandedValue(0, spacingVars.micro),
});
