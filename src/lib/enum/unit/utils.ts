import { type FilterGroup, GlyphIcon } from '@tapie-kr/inspire-react';
import { Unit } from '.';

export const getUnitIcon = (unit: Unit): GlyphIcon => {
  const unitIcon: {
    [key in Unit]: GlyphIcon;
  } = {
    [Unit.DEVELOPER]: GlyphIcon.CODE,
    [Unit.DESIGNER]: GlyphIcon.BRUSH,
  };

  return unitIcon[unit];
};

export const getUnitFilterGroup = (): FilterGroup => {
  return {
    label: '유닛',
    options: Object.values(Unit).map(unit => ({
      label: unit,
      value: unit,
      icon: getUnitIcon(unit),
    })),
  };
};
