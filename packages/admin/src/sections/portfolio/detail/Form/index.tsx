import * as s from './style.css';

import {
  FormField,
  Input,
  spacingVars,
  StackAlign,
  VStack,
} from '@tapie-kr/inspire-react';

export default function PortfolioDetailFormSection() {
  return (
    <VStack
      fullWidth
      spacing={spacingVars.jumbo}
      align={StackAlign.START}
      className={s.base}
    >
      <FormField
        isEssential
        label='이름'
      >
        <Input.Text placeholder='이름 입력' />
      </FormField>
      <FormField
        isEssential
        label='캐치프레이즈'
      >
        <Input.Text placeholder='캐치프레이즈 입력' />
      </FormField>
      <FormField
        isEssential
        label='설명'
      >
        <Input.Paragraph
          maxLength={1000}
          placeholder='설명 입력'
          height={150}
        />
      </FormField>
    </VStack>
  );
}
