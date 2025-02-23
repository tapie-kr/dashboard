import { type FilterGroup, GlyphIcon, type IconName } from '@tapie-kr/inspire-react';

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

export const getContestFilterGroup = (): FilterGroup => {
  return {
    label:   '대회',
    options: Object.values(Contest).map(contest => ({
      label: contest,
      value: contest,
      icon:  getContestIcon(contest),
    })),
  };
};
