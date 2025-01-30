import * as s from './style.css';

import { FormField, Input, spacingVars, StackAlign, VStack } from '@tapie-kr/inspire-react';

export default function PortfolioDetailFormSection() {
  return (
    <VStack
      spacing={spacingVars.jumbo}
      fullWidth
      align={StackAlign.START}
      className={s.base}
    >
      <FormField
        label={'이름'}
        isEssential
      >
        <Input.Text placeholder={'이름 입력'} />
      </FormField>
      <FormField
        label={'캐치프레이즈'}
        isEssential
      >
        <Input.Text placeholder={'캐치프레이즈 입력'} />
      </FormField>
      <FormField
        label={'설명'}
        isEssential
      >
        <Input.Paragraph
          maxLength={1000}
          placeholder={'설명 입력'}
          height={150}
        />
      </FormField>
    </VStack>
  );
}
