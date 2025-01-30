'use client';

import * as s from './style.css';

import { type Temporal } from '@js-temporal/polyfill';
import {
  Badge,
  BadgeSize,
  BadgeTheme,
  colorVars,
  GlyphIcon,
  HStack,
  spacingVars,
  StackAlign,
  Typo,
  VStack,
  Weight,
} from '@tapie-kr/inspire-react';
import { useRouter } from 'next/navigation';
import { type Unit } from '@/lib/enum';
import { getUnitIcon } from '@/lib/enum/utils';
import { resolvePath } from '@/lib/pathmap';
import { pathMap } from '@/lib/pathmap/map';
import { type Member } from '@/lib/types';
import { getMemberString } from '@/lib/types/utils';
import { getDateString } from '@/lib/utils/date';

interface ApplicationCardProps {
  member: Member;
  content: string;
  unit: Unit;
  date: Temporal.PlainDateTime;
  hasPortfolio?: boolean;
}

export default function ApplicationCard(props: ApplicationCardProps) {
  const { member, content, unit, date, hasPortfolio = true } = props;

  const router = useRouter();

  const handleNavigate = () => {
    router.push(resolvePath(pathMap.application, 3));
  };

  return (
    <VStack
      className={s.base}
      spacing={spacingVars.petite}
      align={StackAlign.START}
      onClick={handleNavigate}
    >
      <VStack
        spacing={spacingVars.optical}
        align={StackAlign.START}
      >
        <Typo.Petite weight={Weight.SEMIBOLD}>{getMemberString(member)}</Typo.Petite>
        <Typo.Tiny color={colorVars.content.default}>{content}</Typo.Tiny>
      </VStack>
      <HStack spacing={spacingVars.tiny}>
        <Badge.Default
          size={BadgeSize.SMALL}
          label={unit}
          leadingIcon={getUnitIcon(unit)}
        />
        <Badge.Default
          size={BadgeSize.SMALL}
          label={`${getDateString(date, true)} 제출`}
          leadingIcon={GlyphIcon.TODAY}
        />
        <Badge.Default
          size={BadgeSize.SMALL}
          label={'포트폴리오'}
          theme={hasPortfolio ? BadgeTheme.GREEN : BadgeTheme.RED}
          leadingIcon={hasPortfolio ? GlyphIcon.CHECK : GlyphIcon.CLOSE}
        />
      </HStack>
    </VStack>
  );
}
