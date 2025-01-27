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
import { useRouter } from 'next/navigation';
import { type Contest } from '@/lib/enum';
import { getContestIcon } from '@/lib/enum/utils';
import { resolvePath } from '@/lib/pathmap';
import { pathMap } from '@/lib/pathmap/map';
import { type Garde, type Member } from '@/lib/types';
import { getGradeIcon, getGradeTheme } from '@/lib/types/utils';

interface AchievementCardProps {
  contestName: string;
  members: Member[];
  grade: Garde;
  year: number;
  contestType: Contest;
}

export default function AchievementCard(props: AchievementCardProps) {
  const { contestName, members, grade, year, contestType } = props;

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
    router.push(resolvePath(pathMap.achievement, 1));
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
        <Typo.Petite weight={Weight.SEMIBOLD}>{contestName}</Typo.Petite>
        <Typo.Tiny color={colorVars.content.default}>{getMemberString()}</Typo.Tiny>
      </VStack>
      <HStack spacing={spacingVars.tiny}>
        <Badge.Default
          theme={getGradeTheme(grade)}
          leadingIcon={getGradeIcon()}
          size={BadgeSize.SMALL}
          label={grade.gradeLabel}
        />
        <Badge.Default
          size={BadgeSize.SMALL}
          label={`${year}년`}
        />
        <Badge.Default
          size={BadgeSize.SMALL}
          label={contestType}
          leadingIcon={getContestIcon(contestType)}
        />
      </HStack>
    </VStack>
  );
}
