import {
  AspectRatio,
  colorVars,
  HStack,
  Image,
  spacingVars,
  StackAlign,
  Typo,
  VStack,
  Weight,
} from '@tapie-kr/inspire-react';

interface MemberDetailSummarySectionProps extends MemberType {
}

import * as s from './style.css';

import { MemberType } from '@tapie-kr/api-client';
import GenerationBadge from '@tapie-kr/dashboard-shared/components/atoms/badge/generation';
import RoleBadge from '@tapie-kr/dashboard-shared/components/atoms/badge/role';
import { UnitEnumToKorean } from '@tapie-kr/dashboard-shared/lib/utils/enum';

export default function MemberDetailSummarySection(props: MemberDetailSummarySectionProps) {
  const {
    name,
    username,
    unit,
    role,
    generation,
    profileUri,
    awards,
    skills,
  } = props;

  return (
    <HStack spacing={spacingVars.giant}>
      <HStack spacing={spacingVars.moderate}>
        <AspectRatio
          ratio={1 / 1}
          width={86}
          className={s.image}
        >
          <Image
            fullWidth
            fullHeight
            src={profileUri}
            alt={username}
          />
        </AspectRatio>
        <VStack
          spacing={spacingVars.micro}
          align={StackAlign.START}
        >
          <HStack spacing={spacingVars.micro}>
            <Typo.Medium weight={Weight.SEMIBOLD}>10404 {name}</Typo.Medium>
            <Typo.Base
              weight={Weight.MEDIUM}
              color={colorVars.content.default}
            >
              {UnitEnumToKorean(unit)}
            </Typo.Base>
          </HStack>
          <HStack spacing={spacingVars.micro}>
            <RoleBadge role={role} />
            <GenerationBadge generation={generation} />
          </HStack>
        </VStack>
      </HStack>
      <HStack spacing={spacingVars.moderate}>
        <Stat
          label='프로필 조회수'
          value={46}
        />
        <Stat
          label='포트폴리오 개수'
          value={46}
        />
        <Stat
          label='수상실적 개수'
          value={awards.length}
        />
        <Stat
          label='기술 스택 개수'
          value={skills.length}
        />
      </HStack>
    </HStack>
  );
}

interface StatProps {
  label: string;
  value: number;
}

function Stat(props: StatProps) {
  const { label, value } = props;

  return (
    <VStack
      spacing={spacingVars.optical}
      align={StackAlign.START}
    >
      <Typo.Micro
        weight={Weight.MEDIUM}
        color={colorVars.content.default}
      >
        {label}
      </Typo.Micro>
      <Typo.Medium weight={Weight.SEMIBOLD}>{value}</Typo.Medium>
    </VStack>
  );
}
