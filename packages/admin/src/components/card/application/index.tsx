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

import { FormApplicationResponseType } from '@tapie-kr/api-client';
import UnitBadge from '@tapie-kr/dashboard-shared/components/atoms/badge/unit';
import { getDatetimeString } from '@tapie-kr/dashboard-shared/lib/utils/date';
import { useRouter } from 'next/navigation';
import { path, pathMap } from '@/lib/pathmap';

interface ApplicationCardProps extends FormApplicationResponseType {
  hasPortfolio: boolean;
}

export default function ApplicationCard(props: ApplicationCardProps) {
  const {
    uuid,
    formId,
    name,
    introduction,
    unit,
    createdAt,
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
        <Typo.Tiny color={colorVars.content.default}>{introduction}</Typo.Tiny>
      </VStack>
      <HStack spacing={spacingVars.tiny}>
        <UnitBadge
          unit={unit}
          size={BadgeSize.SMALL}
        />
        <Badge.Default
          size={BadgeSize.SMALL}
          label={`${getDatetimeString(createdAt.toString(), true)} 제출`}
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
