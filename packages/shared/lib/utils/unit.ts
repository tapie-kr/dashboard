import { MemberUnit } from '@tapie-kr/api-client';

export function UnitEnumToKorean(unit: MemberUnit): string {
  switch (unit) {
    case MemberUnit.DEVELOPER:
      return '개발자';

    case MemberUnit.DESIGNER:
      return '디자이너';

    default:
      return '알 수 없음';
  }
}
