import { MemberUnitType } from '@tapie-kr/api-client';

export function UnitEnumToKorean(unit: MemberUnitType): string {
  switch (unit) {
    case MemberUnitType.DEVELOPER:
      return '개발자';

    case MemberUnitType.DESIGNER:
      return '디자이너';

    default:
      return '알 수 없음';
  }
}
