import * as s from './style.css';

import {
  Badge,
  BadgeSize,
  Box,
  colorVars,
  GlyphIcon,
  HStack,
  Icon,
  spacingVars,
  StackAlign,
  StackJustify,
  Typo,
  VStack,
  Weight,
} from '@tapie-kr/inspire-react';
import { useRouter } from 'next/navigation';
import { type Executive, type Unit } from '@/lib/enum';
import { getContestIcon, getExecutiveTheme, getUnitIcon } from '@/lib/enum/utils';
import { resolvePath } from '@/lib/pathmap';
import { pathMap } from '@/lib/pathmap/map';
import { type Member } from '@/lib/types';
import { getMemberString } from '@/lib/types/utils';

interface MemberCardProps {
  member: Member;
  executive?: Executive;
  unit: Unit;
  generation: number;
  isGraduated?: boolean;
}

export default function MemberCard(props: MemberCardProps) {
  const { member, executive, unit, generation, isGraduated = false } = props;

  const router = useRouter();

  const handleClick = () => {
    router.push(resolvePath(pathMap.member, 5));
  };

  return (
    <HStack
      spacing={spacingVars.base}
      className={s.base}
      justify={StackJustify.START}
      onClick={handleClick}
    >
      <Box className={s.circle} />
      <VStack
        spacing={spacingVars.tiny}
        align={StackAlign.START}
      >
        <HStack spacing={spacingVars.mini}>
          <Typo.Base weight={Weight.SEMIBOLD}>{getMemberString(member)}</Typo.Base>
          <Icon
            name={GlyphIcon.ARROW_FORWARD}
            size={14}
            color={colorVars.content.default}
          />
        </HStack>
        <HStack spacing={spacingVars.tiny}>
          {executive && (
            <Badge.Default
              leadingIcon={getContestIcon()}
              theme={getExecutiveTheme()}
              label={executive}
              size={BadgeSize.SMALL}
            />
          )}
          <Badge.Default
            leadingIcon={getUnitIcon(unit)}
            label={unit}
            size={BadgeSize.SMALL}
          />
          <Badge.Default
            leadingIcon={GlyphIcon.SCHOOL}
            label={`${generation}기${isGraduated ? ' (졸업)' : ''}`}
            size={BadgeSize.SMALL}
          />
        </HStack>
      </VStack>
    </HStack>
  );
}
