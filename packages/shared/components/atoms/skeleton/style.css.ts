import { keyframes, style } from '@vanilla-extract/css';

const shimmer = keyframes({
  '0%':   { backgroundPosition: '-1000px 0' },
  '100%': { backgroundPosition: '1000px 0' },
});

export const skeleton = style({
  width:          '100%',
  height:         '100%',
  borderRadius:   '4px',
  background:     'linear-gradient(to right, #f0f0f0 0%, #e0e0e0 20%, #f0f0f0 40%, #f0f0f0 100%)',
  backgroundSize: '200% 100%',
  animation:      `${shimmer} 1.5s infinite linear`,
});
