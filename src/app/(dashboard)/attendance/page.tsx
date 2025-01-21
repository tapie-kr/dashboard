import * as s from './page.css';

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

export default function AttendancePage() {
  return (
    <HStack
      spacing={spacingVars.base}
      fullWidth
      justify={StackJustify.START}
    >
      {[32, 535].map((item, index) => {
        return (
          <HStack
            spacing={spacingVars.petite}
            className={s.card}
            key={index}
            justify={StackJustify.START}
            align={StackAlign.START}
          >
            <VStack
              spacing={spacingVars.optical}
              align={StackAlign.START}
              fullWidth
            >
              <Typo.Base weight={Weight.SEMIBOLD}>{item}명</Typo.Base>
              <Typo.Tiny color={colorVars.content.default}>이번 달 결석 수</Typo.Tiny>
            </VStack>
            <Icon
              name={index == 0 ? GlyphIcon.TODAY : GlyphIcon.CALENDAR_TODAY}
              size={24}
            />
          </HStack>
        );
      })}
    </HStack>
  );
}
