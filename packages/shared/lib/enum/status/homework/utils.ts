import {
  BadgeTheme,
  type FilterGroup,
  GlyphIcon,
  type IconName,
} from '@tapie-kr/inspire-react';

import { HomeworkStatus } from '.';

export const getHomeworkStatusIcon = (status: HomeworkStatus): IconName => {
  const statusIcon: {
    [key in HomeworkStatus]: IconName;
  } = {
    [HomeworkStatus.CONFIRMED]:         GlyphIcon.CHECK,
    [HomeworkStatus.FAILED]:            GlyphIcon.ERROR,
    [HomeworkStatus.DEADLINE_IMMINENT]: GlyphIcon.WARNING,
    [HomeworkStatus.IN_PROGRESS]:       GlyphIcon.SCHOOL,
  };

  return statusIcon[status];
};

export const getHomeworkStatusTheme = (status: HomeworkStatus): BadgeTheme => {
  const statusTheme: {
    [key in HomeworkStatus]: BadgeTheme;
  } = {
    [HomeworkStatus.CONFIRMED]:         BadgeTheme.GREEN,
    [HomeworkStatus.FAILED]:            BadgeTheme.MONOCHROME,
    [HomeworkStatus.DEADLINE_IMMINENT]: BadgeTheme.RED,
    [HomeworkStatus.IN_PROGRESS]:       BadgeTheme.BLUE,
  };

  return statusTheme[status];
};

export const getHomeworkStatusFilterGroup = (): FilterGroup => {
  return {
    label:   '상태',
    options: Object.values(HomeworkStatus).map(status => ({
      label: status,
      icon:  getHomeworkStatusIcon(status),
      value: status,
    })),
  };
};
