import {
  Badge,
  BadgeSize,
  BadgeTheme,
  GlyphIcon,
} from '@tapie-kr/inspire-react';

import { MemberRole } from '@tapie-kr/api-client/enum';

import { isExecutive } from '~/lib/enum/utils';
import { RoleEnumToKorean } from '~/lib/utils/enum';

interface UnitBadgeProps {
  role:  MemberRole;
  size?: BadgeSize;
}

export default function RoleBadge(props: UnitBadgeProps) {
  const { role, size = BadgeSize.LARGE } = props;

  if (!isExecutive(role)) return <></>;

  return (
    <Badge.Default
      label={RoleEnumToKorean(role)}
      theme={BadgeTheme.GREEN}
      size={size}
      leadingIcon={GlyphIcon.VERIFIED}
    />
  );
}
