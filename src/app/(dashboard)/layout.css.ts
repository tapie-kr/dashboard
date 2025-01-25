import { style } from '@vanilla-extract/css';

export const layout = style({
  height: '100vh',
  overflow: 'hidden',
});

export const content = style({
  overflowY: 'auto',
  height: '100%',
});
