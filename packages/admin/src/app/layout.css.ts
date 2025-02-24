import { style } from '@vanilla-extract/css';

export const body = style({
  width:  '100%',
  height: '100vh',
});

export const layout = style({
  height:   '100vh',
  overflow: 'hidden',
});

export const content = style({
  overflowY: 'auto',
  height:    '100%',
});
