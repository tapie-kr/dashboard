import { GlyphIcon, type IconName } from '@tapie-kr/inspire-react';
import { Contest } from '.';

export const getContestIcon = (contest: Contest) => {
  const contestIcon: {
    [key in Contest]: IconName;
  } = {
    [Contest.INTERNAL]: GlyphIcon.SCHOOL,
    [Contest.EXTERNAL]: GlyphIcon.EXPLORE,
  };

  return contestIcon[contest];
};
