import * as s from './style.css';

import {
  FormField,
  Input,
  spacingVars,
  VStack,
} from '@tapie-kr/inspire-react';

export default function AchievementDetailFormSection() {
  return (
    <VStack
      spacing={spacingVars.medium}
      className={s.base}
    >
      <FormField
        isEssential
        label='대회 이름'
      >
        <Input.Text placeholder='대회 이름 입력' />
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
