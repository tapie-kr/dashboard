import * as s from './style.css';

import {
  Badge,
  BadgeSize,
  colorVars,
  HStack,
  spacingVars,
  StackAlign,
  Typo,
  VStack,
  Weight,
} from '@tapie-kr/inspire-react';

import { AwardType } from '@tapie-kr/api-client';
import { toTemporalDate } from '@tapie-kr/dashboard-shared/lib/utils/date';
import { useRouter } from 'next/navigation';
import { path, pathMap } from '@/lib/pathmap';
import { getGradeIcon, getGradeTheme } from '@/lib/types/utils';

interface AchievementCardProps extends AwardType {
}

export default function AwardsCard(props: AchievementCardProps) {
  const {
    uuid,
    members,
    title,
    grade,
    gradeLabel,
    rewardedAt,
  } = props;

  const router = useRouter();

  const getMemberString = () => {
    if (members.length <= 3) {
      return members.map(member => member.name).join(', ');
    } else {
      return `${members
        .slice(0, 3)
        .map(member => member.name)
        .join(', ')} 외 ${members.length - 3}명`;
    }
  };

  const handleClick = () => {
    router.push(pathMap.resolvePath(path.awards, uuid));
  };

  return (
    <VStack
      spacing={spacingVars.petite}
      className={s.base}
      align={StackAlign.START}
      onClick={handleClick}
    >
      <VStack
        spacing={spacingVars.optical}
        align={StackAlign.START}
      >
        <Typo.Petite weight={Weight.SEMIBOLD}>{title}</Typo.Petite>
        <Typo.Tiny color={colorVars.content.default}>{getMemberString()}</Typo.Tiny>
      </VStack>
      <HStack spacing={spacingVars.tiny}>
        <Badge.Default
          theme={getGradeTheme(grade)}
          leadingIcon={getGradeIcon()}
          size={BadgeSize.SMALL}
          label={gradeLabel}
        />
        <Badge.Default
          size={BadgeSize.SMALL}
          label={`${toTemporalDate(rewardedAt).year}년`}
        />
      </HStack>
    </VStack>
  );
}
