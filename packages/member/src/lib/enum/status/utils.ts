import { BadgeTheme, type FilterGroup, GlyphIcon, type IconName } from '@tapie-kr/inspire-react';
import { Status } from '.';

export const getStatusIcon = (status: Status): IconName => {
  const statusIcon: {
    [key in Status]: IconName;
  } = {
    [Status.CONFIRMED]: GlyphIcon.CHECK,
    [Status.FAILED]: GlyphIcon.ERROR,
    [Status.DEADLINE_IMMINENT]: GlyphIcon.WARNING,
    [Status.IN_PROGRESS]: GlyphIcon.SCHOOL,
  };

  return statusIcon[status];
};

export const getStatusTheme = (status: Status): BadgeTheme => {
  const statusTheme: {
    [key in Status]: BadgeTheme;
  } = {
    [Status.CONFIRMED]: BadgeTheme.GREEN,
    [Status.FAILED]: BadgeTheme.MONOCHROME,
    [Status.DEADLINE_IMMINENT]: BadgeTheme.RED,
    [Status.IN_PROGRESS]: BadgeTheme.BLUE,
  };

  return statusTheme[status];
};

export const getStatusFilterGroup = (): FilterGroup => {
  return {
    label: '상태',
    options: Object.values(Status).map(status => ({
      label: status,
      icon: getStatusIcon(status),
      value: status,
    })),
  };
};
