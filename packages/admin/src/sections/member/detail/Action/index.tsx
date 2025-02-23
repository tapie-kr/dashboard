import {
  Button,
  colorVars,
  GlyphIcon,
  HStack,
  spacingVars,
  StackAlign,
  Typo,
  VStack,
  Weight,
} from '@tapie-kr/inspire-react';

export default function MemberDetailActionSection() {
  return (
    <VStack
      spacing={spacingVars.petite}
      align={StackAlign.START}
    >
      <Button.Default leadingIcon={GlyphIcon.INBOX}>신청폼 조회</Button.Default>
      <HStack spacing={spacingVars.petite}>
        <Footnote text={'2025-01-01 제출됨'} />
        <Footnote text={'2025-01-01 수정됨'} />
      </HStack>
    </VStack>
  );
}

interface FootnoteProps {
  text: string;
}

function Footnote(props: FootnoteProps) {
  return (
    <Typo.Tiny
      color={colorVars.content.muted}
      weight={Weight.MEDIUM}
    >
      {props.text}
    </Typo.Tiny>
  );
}
