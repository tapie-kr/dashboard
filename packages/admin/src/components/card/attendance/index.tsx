import * as s from './style.css';

import {
  Button,
  ButtonSize,
  ButtonVariant,
  colorVars,
  GlyphIcon,
  spacingVars,
  StackAlign,
  Typo,
  VStack,
  Weight,
} from '@tapie-kr/inspire-react';

interface AttendanceCardProps {
  member:    {
    studentId: number;
    name:      string;
  };
  day:       number;
  count:     number;
  isAbsent?: boolean;
}

export default function AttendanceCard(props: AttendanceCardProps) {
  const {
    member,
    day,
    count,
    isAbsent = false,
  } = props;

  const dayString = day < 7 ? `${day}일` : `${~~(day / 7)}주`;

  return (
    <VStack
      className={s.base}
      spacing={spacingVars.petite}
      align={StackAlign.START}
    >
      <VStack
        spacing={spacingVars.optical}
        align={StackAlign.START}
      >
        <Typo.Petite weight={Weight.SEMIBOLD}>{member.studentId} {member.name}</Typo.Petite>
        <Typo.Tiny color={colorVars.content.default}>
          {dayString} 연속 출석, {count}번 결석
        </Typo.Tiny>
      </VStack>
      <Button.Default
        fullWidth
        size={ButtonSize.SMALL}
        variant={ButtonVariant.SECONDARY}
        leadingIcon={isAbsent ? GlyphIcon.ERROR : GlyphIcon.WARNING}
      >
        {isAbsent ? '결석 처리된 부원' : '결석 처리하기'}
      </Button.Default>
    </VStack>
  );
}
