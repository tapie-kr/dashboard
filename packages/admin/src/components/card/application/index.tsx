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

import { FormApplicationType } from '@tapie-kr/api-client';
import UnitBadge from '@tapie-kr/dashboard-shared/components/atoms/badge/unit';
import { getDatetimeString } from '@tapie-kr/dashboard-shared/lib/utils/date';
import { useRouter } from 'next/navigation';
import { path, pathMap } from '@/lib/pathmap';

interface ApplicationCardProps  extends FormApplicationType {
}

export default function ApplicationCard(props: ApplicationCardProps) {
  const router = useRouter();

  const handleNavigate = () => {
    router.push(pathMap.resolvePath(path.form, props.formId, props.uuid));
  };

  return (
    <VStack
      className={s.base}
      spacing={spacingVars.petite}
      align={StackAlign.START}
      onClick={handleNavigate}
    >
      <VStack
        fullWidth
        spacing={spacingVars.optical}
        align={StackAlign.START}
      >
        <Typo.Petite weight={Weight.SEMIBOLD}>{props.name}</Typo.Petite>
        <Typo.Tiny
          nowrap
          color={colorVars.content.default}
          className={s.introduction}
        >{props.introduction}
        </Typo.Tiny>
      </VStack>
      <HStack spacing={spacingVars.tiny}>
        <UnitBadge
          unit={props.unit}
          size={BadgeSize.SMALL}
        />
        <Badge.Default
          size={BadgeSize.SMALL}
          label={`${getDatetimeString(props.createdAt.toString(), true)} 제출`}
          leadingIcon={GlyphIcon.TODAY}
        />
        <Badge.Default
          size={BadgeSize.SMALL}
          label='포트폴리오'
          theme={props.portfolioAssetUUID ? BadgeTheme.GREEN : BadgeTheme.RED}
          leadingIcon={props.portfolioAssetUUID ? GlyphIcon.CHECK : GlyphIcon.CLOSE}
        />
      </HStack>
    </VStack>
  );
}
