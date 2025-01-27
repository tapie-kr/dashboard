import { Button, ButtonSize, GlyphIcon, HStack, spacingVars } from '@tapie-kr/inspire-react';

export default function AchievementDetailActionSection() {
  return (
    <HStack spacing={spacingVars.petite}>
      <Button.Default size={ButtonSize.SMALL}>변경사항 저장하기</Button.Default>
      <Button.Default
        size={ButtonSize.SMALL}
        leadingIcon={GlyphIcon.DELETE}
      >
        수상실적 삭제하기
      </Button.Default>
    </HStack>
  );
}
