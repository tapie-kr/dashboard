import * as s from './style.css';

import { HStack, spacingVars } from '@tapie-kr/inspire-react';
import { type Executive, type Unit } from '@/lib/enum';
import { type Member } from '@/lib/types';

interface MemberCardProps {
  member: Member;
  executive?: Executive;
  unit: Unit;
  generation: number;
}

export default function MemberCard(props: MemberCardProps) {
  const { member, executive, unit, generation } = props;

  return (
    <HStack
      spacing={spacingVars.base}
      className={s.base}
    ></HStack>
  );
}
