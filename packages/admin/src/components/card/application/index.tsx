'use client';

import * as s from './style.css';

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

import { type Temporal } from '@js-temporal/polyfill';
import { MemberUnitType } from '@tapie-kr/api-client';
import { getUnitIcon } from '@tapie-kr/dashboard-shared/lib/enum/utils';
import { getDatetimeString } from '@tapie-kr/dashboard-shared/lib/utils/date';
import { useRouter } from 'next/navigation';
import { use } from 'react';
import { path, pathMap } from '@/lib/pathmap';
import { type Member } from '@/lib/types';
import { getMemberString } from '@/lib/types/utils';

interface ApplicationCardProps {
  uuid:          string;
  formId:        number;
  member:        Member;
  content:       string;
  unit:          MemberUnitType;
  date:          Temporal.PlainDateTime;
  hasPortfolio?: boolean;
}

export default function ApplicationCard(props: ApplicationCardProps) {
  const {
    uuid,
    formId,
    member,
    content,
    unit,
    date,
    hasPortfolio = true,
  } = props;

  const router = useRouter();

  const handleNavigate = () => {
    router.push(pathMap.resolvePath(path.application, formId, uuid));
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
          label={`${getDatetimeString(date, true)} 제출`}
          leadingIcon={GlyphIcon.TODAY}
        />
        <Badge.Default
          size={BadgeSize.SMALL}
          label='포트폴리오'
          theme={hasPortfolio ? BadgeTheme.GREEN : BadgeTheme.RED}
          leadingIcon={hasPortfolio ? GlyphIcon.CHECK : GlyphIcon.CLOSE}
        />
      </HStack>
    </VStack>
  );
}
