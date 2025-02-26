import { MemberRole, MemberUnit } from '@tapie-kr/api-client/enum';

export function UnitEnumToKorean(unit: MemberUnit): string {
  const unitMap: Record<MemberUnit, string> = {
    [MemberUnit.DEVELOPER]: '개발자',
    [MemberUnit.DESIGNER]:  '디자이너',
  };

  return unitMap[unit];
}

export function RoleEnumToKorean(role: MemberRole): string {
  const roleMap: Record<MemberRole, string> = {
    [MemberRole.GUEST]:      '게스트',
    [MemberRole.MEMBER]:     '부원',
    [MemberRole.CO_MANAGER]: '부부장',
    [MemberRole.MANAGER]:    '부장',
  };

  return roleMap[role];
}
