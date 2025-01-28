'use client';

import * as s from './style.css';

import { type Temporal } from '@js-temporal/polyfill';
import {
  Badge,
  BadgeSize,
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

  const getPadStart = (value: number) => {
    return String(value).padStart(2, '0');
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
          label={`${date.year}-${getPadStart(date.month)}-${getPadStart(date.day)} ${getPadStart(date.hour)}:${getPadStart(date.minute)} 제출`}
          leadingIcon={GlyphIcon.TODAY}
        />
        <Badge.Default
          size={BadgeSize.SMALL}
          label={'포트폴리오'}
          leadingIcon={hasPortfolio ? GlyphIcon.CHECK : GlyphIcon.CLOSE}
        />
      </HStack>
    </VStack>
  );
}
