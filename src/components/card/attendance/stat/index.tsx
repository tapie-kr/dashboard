import * as s from './style.css';

import {
  colorVars,
  GlyphIcon,
  HStack,
  Icon,
  spacingVars,
  StackAlign,
  StackJustify,
  Typo,
  VStack,
  Weight,
} from '@tapie-kr/inspire-react';
import { AttendanceUnit } from '../shared';

interface AttendanceStatProps {
  count: number;
  unit: AttendanceUnit;
}

export default function AttendanceStatCard(props: AttendanceStatProps) {
  const { count, unit } = props;

  const isMonth = unit === AttendanceUnit.MONTH;

  return (
    <HStack
      spacing={spacingVars.petite}
      className={s.card}
      justify={StackJustify.START}
      align={StackAlign.START}
    >
      <VStack
        spacing={spacingVars.optical}
        align={StackAlign.START}
        fullWidth
      >
        <Typo.Base weight={Weight.SEMIBOLD}>{count}명</Typo.Base>
        <Typo.Tiny color={colorVars.content.default}>
          이번 {isMonth ? '달' : '년도'} 결석 수
        </Typo.Tiny>
      </VStack>
      <Icon
        name={isMonth ? GlyphIcon.TODAY : GlyphIcon.CALENDAR_TODAY}
        size={24}
      />
    </HStack>
  );
}
