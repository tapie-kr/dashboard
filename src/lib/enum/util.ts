import { BadgeTheme, GlyphIcon } from '@tapie-kr/inspire-react';
import { Status, Unit } from '.';

export const getUnitIcon = (unit: Unit): GlyphIcon => {
  const unitIcon: {
    [key in Unit]: GlyphIcon;
  } = {
    [Unit.DEVELOPER]: GlyphIcon.CODE,
    [Unit.DESIGNER]: GlyphIcon.BRUSH,
  };

  return unitIcon[unit];
};

export const getStatusIcon = (status: Status): GlyphIcon => {
  const statusIcon: {
    [key in Status]: GlyphIcon;
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
