import { BadgeTheme, type FilterGroup, GlyphIcon, type IconName } from '@tapie-kr/inspire-react';
import { Status } from '.';

export const getStatusIcon = (status: Status): IconName => {
  const statusIcon: {
    [key in Status]: IconName;
  } = {
    [Status.CONFIRMED]: GlyphIcon.CHECK,
    [Status.CANCELED]: GlyphIcon.BLOCK,
    [Status.SCHEDULED]: GlyphIcon.FLAG,
    [Status.POSTPONED]: GlyphIcon.ERROR,
    [Status.IN_PROGRESS]: GlyphIcon.SCHOOL,
  };

  return statusIcon[status];
};

export const getStatusTheme = (status: Status): BadgeTheme => {
  const statusTheme: {
    [key in Status]: BadgeTheme;
  } = {
    [Status.CONFIRMED]: BadgeTheme.GREEN,
    [Status.CANCELED]: BadgeTheme.RED,
    [Status.SCHEDULED]: BadgeTheme.MONOCHROME,
    [Status.POSTPONED]: BadgeTheme.YELLOW,
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
