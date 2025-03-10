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
import { getDatetimeString } from '@tapie-kr/dashboard-shared/lib/utils/date';
import { useRouter } from 'next/navigation';
import { path, pathMap } from '@/lib/pathmap';

interface ApplicationCardProps extends FormApplicationType {
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
        >{props.introduction.split('\n')[0]}
        </Typo.Tiny>
      </VStack>
      <HStack spacing={spacingVars.tiny}>
        {
          props.submitted
            ? (
              <Badge.Default
                size={BadgeSize.SMALL}
                label={props.submittedAt ? `${getDatetimeString(props.submittedAt.toString(), true)} 제출` : '제출 실패'}
                leadingIcon={GlyphIcon.TODAY}
              />
            )
            : (
              <Badge.Default
                size={BadgeSize.SMALL}
                label={`${getDatetimeString(props.updatedAt.toString(), true)} 저장`}
                leadingIcon={GlyphIcon.TODAY}
              />
            )
        }
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
