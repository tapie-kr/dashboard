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
import { type Executive, type Unit } from '@/lib/enum';
import { getExecutiveIcon, getExecutiveTheme } from '@/lib/enum/utils';
import { type Member } from '@/lib/types';
import { getMemberString } from '@/lib/types/utils';

interface MemberDetailSummarySectionProps {
  profileImage: string;
  member: Member;
  unit: Unit;
  executive?: Executive;
  generation: number;
  isGraduated?: boolean;
  stats: [number, number, number, number];
}

import * as s from './style.css';

export default function MemberDetailSummarySection(props: MemberDetailSummarySectionProps) {
  const { profileImage, member, unit, executive, generation, isGraduated = false, stats } = props;

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
            src={profileImage}
            alt={member.name}
          />
        </AspectRatio>
        <VStack
          spacing={spacingVars.micro}
          align={StackAlign.START}
        >
          <HStack spacing={spacingVars.micro}>
            <Typo.Medium weight={Weight.SEMIBOLD}>{getMemberString(member)}</Typo.Medium>
            <Typo.Base
              weight={Weight.MEDIUM}
              color={colorVars.content.default}
            >
              {unit}
            </Typo.Base>
          </HStack>
          <HStack spacing={spacingVars.micro}>
            {executive && (
              <Badge.Default
                label={executive}
                theme={getExecutiveTheme()}
                leadingIcon={getExecutiveIcon()}
              />
            )}
            <Badge.Default
              label={`${generation}기${isGraduated ? ' (졸업)' : ''}`}
              leadingIcon={GlyphIcon.SCHOOL}
            />
          </HStack>
        </VStack>
      </HStack>

      <HStack spacing={spacingVars.moderate}>
        {['프로필 조회수', '포트폴리오 개수', '수상실적 개수', '기술 스택 개수'].map(
          (label, index) => (
            <Stat
              key={index}
              label={label}
              value={stats[index]}
            />
          ),
        )}
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
