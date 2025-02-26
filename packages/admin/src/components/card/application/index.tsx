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

<<<<<<< HEAD
import { FormResponseType } from '@tapie-kr/api-client';
import { getUnitIcon } from '@tapie-kr/dashboard-shared/lib/enum/utils';
=======
import { type Temporal } from '@js-temporal/polyfill';
import { MemberUnit } from '@tapie-kr/api-client/enum';
import UnitBadge from '@tapie-kr/dashboard-shared/components/atoms/badge/unit';
>>>>>>> d9f3e983c0939b19af5b54fbda930062f86a37b7
import { getDatetimeString } from '@tapie-kr/dashboard-shared/lib/utils/date';
import { useRouter } from 'next/navigation';
import { path, pathMap } from '@/lib/pathmap';

<<<<<<< HEAD
interface ApplicationCardProps extends FormResponseType {
=======
interface ApplicationCardProps {
  uuid:          string;
  formId:        number;
  name:          string;
  content:       string;
  unit:          MemberUnit;
  date:          Temporal.PlainDateTime;
  hasPortfolio?: boolean;
>>>>>>> d9f3e983c0939b19af5b54fbda930062f86a37b7
}

export default function ApplicationCard(props: ApplicationCardProps) {
  const {
    uuid,
    formId,
    name,
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
        <Typo.Petite weight={Weight.SEMIBOLD}>{name}</Typo.Petite>
        <Typo.Tiny color={colorVars.content.default}>{content}</Typo.Tiny>
      </VStack>
      <HStack spacing={spacingVars.tiny}>
        <UnitBadge
          unit={unit}
          size={BadgeSize.SMALL}
        />
        <Badge.Default
          size={BadgeSize.SMALL}
          label={`${getDatetimeString(date.toString(), true)} 제출`}
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
