import {
  Button,
  ButtonSize,
  ButtonVariant,
  GlyphIcon,
  HStack,
  spacingVars,
  Theme,
} from '@tapie-kr/inspire-react';

export default function AchievementDetailActionSection() {
  return (
    <HStack spacing={spacingVars.petite}>
      <Button.Default size={ButtonSize.SMALL}>변경사항 저장하기</Button.Default>
      <Button.Default
        variant={ButtonVariant.SECONDARY}
        size={ButtonSize.SMALL}
        theme={Theme.RED}
        leadingIcon={GlyphIcon.DELETE}
      >
        수상실적 삭제하기
      </Button.Default>
    </HStack>
  );
}
