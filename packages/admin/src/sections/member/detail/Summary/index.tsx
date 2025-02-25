import {
  AspectRatio,
  Badge,
  colorVars,
  GlyphIcon,
  HStack,
  Image,
  spacingVars,
  StackAlign,
  Typo,
  VStack,
  Weight,
} from '@tapie-kr/inspire-react';

import { getRoleIcon, getRoleTheme, isExecutive } from '@tapie-kr/dashboard-shared/lib/enum/utils';

interface MemberDetailSummarySectionProps extends MemberType {
  stats: [number, number, number, number];
}

import * as s from './style.css';

import { MemberType } from '@tapie-kr/api-client';

export default function MemberDetailSummarySection(props: MemberDetailSummarySectionProps) {
  const {
    name,
    username,
    unit,
    role,
    generation,
    profileUri,
    stats,
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
              {unit}
            </Typo.Base>
          </HStack>
          <HStack spacing={spacingVars.micro}>
            {isExecutive(role) && (
              <Badge.Default
                label={role}
                theme={getRoleTheme()}
                leadingIcon={getRoleIcon()}
              />
            )}
            <Badge.Default
              label={`${generation}기${false ? ' (졸업)' : ''}`}
              leadingIcon={GlyphIcon.SCHOOL}
            />
          </HStack>
        </VStack>
      </HStack>
      <HStack spacing={spacingVars.moderate}>
        {[
          '프로필 조회수',
          '포트폴리오 개수',
          '수상실적 개수',
          '기술 스택 개수',
        ].map((label, index) => (
          <Stat
            key={index}
            label={label}
            value={stats[index]}
          />
        ))}
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
