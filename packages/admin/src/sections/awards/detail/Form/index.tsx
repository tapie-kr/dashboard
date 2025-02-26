import * as s from './style.css';

import {
  Button,
  ButtonSize,
  FormField,
  GlyphIcon,
  Input,
  spacingVars,
  VStack,
} from '@tapie-kr/inspire-react';

export default function AwardsDetailFormSection() {
  return (
    <VStack
      spacing={spacingVars.medium}
      className={s.base}
    >
      <FormField
        isEssential
        label='대회 이름'
      >
        <Button.Default
          size={ButtonSize.MEDIUM}
          leadingIcon={GlyphIcon.TROPHY}
        >눌러서 대회 선택하기
        </Button.Default>
      </FormField>
      <FormField
        isEssential
        label='등급'
      >
        <Input.Text placeholder='등급 입력 (ex. 1)' />
      </FormField>
      <FormField
        isEssential
        label='등급 이름'
      >
        <Input.Text placeholder='등급 이름 입력 (ex. 최우수상)' />
      </FormField>
    </VStack>
  );
}
