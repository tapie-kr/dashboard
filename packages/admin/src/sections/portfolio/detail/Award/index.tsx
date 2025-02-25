import * as s from './style.css';

import {
  Badge,
  BadgeSize,
  BadgeTheme,
  Button,
  ButtonSize,
  GlyphIcon,
  HStack,
  Icon,
  Label,
  spacingVars,
  StackAlign,
  Typo,
  VStack,
} from '@tapie-kr/inspire-react';

export default function PortfolioDetailAwardSection() {
  return (
    <VStack
      align={StackAlign.START}
      spacing={spacingVars.micro}
    >
      <Label>수상 내역</Label>
      <Button.Default
        size={ButtonSize.MEDIUM}
        leadingIcon={GlyphIcon.TROPHY}
      >수상 내역 연결하기
      </Button.Default>
      <HStack
        spacing={spacingVars.micro}
        className={s.award}
      >
        <Icon name={GlyphIcon.TROPHY} />
        <VStack
          align={StackAlign.START}
          spacing={spacingVars.optical}
        >
          <Typo.Petite>제 27회 AppJam 미래부분</Typo.Petite>
          <Badge.Default
            label='최우수상'
            size={BadgeSize.SMALL}
            theme={BadgeTheme.RED}
            leadingIcon={GlyphIcon.TROPHY}
          />
        </VStack>
        <Icon
          name={GlyphIcon.CLOSE}
          className={s.closeIcon}
        />
      </HStack>
    </VStack>
  );
}
