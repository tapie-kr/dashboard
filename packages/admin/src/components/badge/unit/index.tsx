import { Badge, BadgeSize, BadgeTheme } from '@tapie-kr/inspire-react';

import { MemberUnit } from '@tapie-kr/api-client';
import { UnitEnumToKorean } from '@tapie-kr/dashboard-shared/lib/utils/enum';

interface UnitBadgeProps {
  unit:   MemberUnit;
  theme?: BadgeTheme;
  size?:  BadgeSize;
}

export default function UnitBadge(props: UnitBadgeProps) {
  const {
    unit,
    theme = BadgeTheme.MONOCHROME,
    size = BadgeSize.LARGE,
  } = props;

  return (
    <Badge.Default
      label={UnitEnumToKorean(unit)}
      theme={theme}
      size={size}
    />
  );
}
