import { type FilterGroup, GlyphIcon, type IconName } from '@tapie-kr/inspire-react';

import { MemberUnit } from '@tapie-kr/api-client/enum';

import { UnitEnumToKorean } from '~/lib/utils/enum';

export const getUnitIcon = (unit: MemberUnit): IconName => {
  const unitIcon: {
    [key in MemberUnit]?: IconName;
  } = {
    [MemberUnit.DEVELOPER]: GlyphIcon.CODE,
    [MemberUnit.DESIGNER]:  GlyphIcon.BRUSH,
  };

  return unitIcon[unit] ?? GlyphIcon.DEFAULT;
};

export const getUnitFilterGroup = (): FilterGroup => {
  return {
    label:   '유닛',
    options: Object.values(MemberUnit).map(unit => ({
      label: UnitEnumToKorean(unit),
      value: unit,
      icon:  getUnitIcon(unit),
    })),
  };
};
