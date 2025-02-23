import {
  Button,
  ButtonSize,
  ButtonVariant,
  GlyphIcon,
  HStack,
  spacingVars,
  Theme,
} from '@tapie-kr/inspire-react';

export default function ApplicationDetailActionSection() {
  return (
    <HStack spacing={spacingVars.petite}>
      <Button.Default
        size={ButtonSize.SMALL}
        leadingIcon={GlyphIcon.ADD}
      >
        합격 처리
      </Button.Default>
      <Button.Default
        variant={ButtonVariant.SECONDARY}
        size={ButtonSize.SMALL}
        theme={Theme.RED}
        leadingIcon={GlyphIcon.DELETE}
      >
        삭제
      </Button.Default>
    </HStack>
  );
}
