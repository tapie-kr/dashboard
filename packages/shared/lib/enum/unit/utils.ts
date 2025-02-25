import { type FilterGroup, GlyphIcon, type IconName } from '@tapie-kr/inspire-react';

import { MemberUnitType } from '@tapie-kr/api-client';

export const getUnitIcon = (unit: MemberUnitType): IconName => {
  const unitIcon: {
    [key in MemberUnitType]: IconName;
  } = {
    [MemberUnitType.DEVELOPER]: GlyphIcon.CODE,
    [MemberUnitType.DESIGNER]:  GlyphIcon.BRUSH,
  };

  return unitIcon[unit];
};

export const getUnitFilterGroup = (): FilterGroup => {
  return {
    label:   '유닛',
    options: Object.values(MemberUnitType).map(unit => ({
      label: unit,
      value: unit,
      icon:  getUnitIcon(unit),
    })),
  };
};
