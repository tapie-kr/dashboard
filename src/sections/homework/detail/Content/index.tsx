import * as s from './style.css';

import {
  Button,
  ButtonSize,
  ButtonVariant,
  colorVars,
  GlyphIcon,
  HStack,
  spacingVars,
  StackAlign,
  Typo,
  VStack,
  Weight,
} from '@tapie-kr/inspire-react';

interface HomeworkDetailContentSectionProps {
  content: string;
}

export default function HomeworkDetailContentSection(props: HomeworkDetailContentSectionProps) {
  const { content } = props;

  return (
    <VStack
      spacing={spacingVars.petite}
      align={StackAlign.START}
    >
      <VStack
        spacing={spacingVars.base}
        className={s.detail}
        fullWidth
      >
        <VStack
          spacing={spacingVars.tiny}
          align={StackAlign.START}
          fullWidth
        >
          <Typo.Tiny
            weight={Weight.MEDIUM}
            color={colorVars.content.muted}
          >
            과제 내용
          </Typo.Tiny>
          <Typo.Micro weight={Weight.MEDIUM}>
            {content.split('\n').map((line, index) => (
              <>
                {line}
                {content.split('\n').length - 1 > index && <br />}
              </>
            ))}
          </Typo.Micro>
        </VStack>
        <VStack
          spacing={spacingVars.tiny}
          align={StackAlign.START}
          fullWidth
        >
          <Typo.Tiny
            weight={Weight.MEDIUM}
            color={colorVars.content.muted}
          >
            첨부 파일
          </Typo.Tiny>
          <HStack spacing={spacingVars.tiny}>
            <Button.Default
              leadingIcon={GlyphIcon.UPLOAD}
              size={ButtonSize.SMALL}
              variant={ButtonVariant.SECONDARY}
            >
              첨부파일 업로드
            </Button.Default>
            {/* TODO SEGMENT */}
          </HStack>
        </VStack>
      </VStack>
      <HStack spacing={spacingVars.petite}>
        <Button.Default
          size={ButtonSize.SMALL}
          leadingIcon={GlyphIcon.CHECK}
        >
          과제 채점하기
        </Button.Default>
        <Button.Default
          size={ButtonSize.SMALL}
          variant={ButtonVariant.SECONDARY}
          leadingIcon={GlyphIcon.CLOSE}
        >
          과제 닫기
        </Button.Default>
      </HStack>
    </VStack>
  );
}
