import * as s from './style.css';

import {
  Button,
  ButtonSize,
  ButtonVariant,
  colorVars,
  GlyphIcon,
  HStack,
  Input,
  InputSize,
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
        align={StackAlign.START}
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
          className={s.fileUpload}
        >
          <Typo.Tiny
            weight={Weight.MEDIUM}
            color={colorVars.content.muted}
          >
            첨부 파일
          </Typo.Tiny>
          <Input.File
            size={InputSize.MEDIUM}
            leadingIcon={GlyphIcon.UPLOAD}
            placeholder={'과제 파일 업로드'}
          />
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
