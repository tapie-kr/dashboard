import { BadgeTheme, GlyphIcon, type IconName } from '@tapie-kr/inspire-react';

import { MemberRole } from '@tapie-kr/api-client';

export const getRoleTheme = () => {
  return BadgeTheme.GREEN;
};

export const getRoleIcon = (): IconName => {
  return GlyphIcon.VERIFIED;
};

export const isExecutive = (role: MemberRole) => {
  return role === MemberRole.MANAGER || role === MemberRole.CO_MANAGER;
};
