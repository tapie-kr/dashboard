import { Button, ButtonSize, GlyphIcon, HStack, spacingVars, Theme } from '@tapie-kr/inspire-react';

export default function ApplicationDetailActionSection() {
  return (
    <HStack spacing={spacingVars.petite}>
      <Button.Default size={ButtonSize.SMALL}>합격 처리</Button.Default>
      <Button.Default
        size={ButtonSize.SMALL}
        theme={Theme.RED}
        leadingIcon={GlyphIcon.DELETE}
      >
        삭제
      </Button.Default>
    </HStack>
  );
}
