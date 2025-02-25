import {
  FormField,
  GlyphIcon,
  HStack,
  ImagePreviewShape,
  Input,
  Select,
  spacingVars,
  StackAlign,
  Typo,
  VStack,
  Weight,
} from '@tapie-kr/inspire-react';

import { MemberUnit } from '@tapie-kr/api-client';
import { UnitEnumToKorean } from '@tapie-kr/dashboard-shared/lib/utils/unit';

export default function MemberDetailBasicInfoSection() {
  return (
    <VStack
      fullWidth
      fullHeight
      spacing={spacingVars.base}
      align={StackAlign.START}
    >
      <Typo.Moderate weight={Weight.SEMIBOLD}>기본 정보</Typo.Moderate>
      <HStack
        fullWidth
        fullHeight
        spacing={spacingVars.medium}
        align={StackAlign.START}
      >
        <VStack
          fullWidth
          spacing={spacingVars.moderate}
        >
          <FormField
            isEssential
            label='이름'
          >
            <Input.Text placeholder='이름 입력' />
          </FormField>
          <FormField
            isEssential
            label='학번'
          >
            <Input.Text placeholder='학번 입력' />
          </FormField>
          <FormField
            isEssential
            label='유저네임'
            description='해당 유저네임으로 TAPIE 이메일이 생성됩니다.'
          >
            <Input.Text placeholder='유저네임 입력' />
          </FormField>
          <FormField
            isEssential
            label='프로필 사진'
          >
            <Input.ImagePreview
              shape={ImagePreviewShape.CIRCLE}
              size={100}
            />
          </FormField>
        </VStack>
        <VStack
          fullWidth
          spacing={spacingVars.moderate}
        >
          <FormField
            isEssential
            label='기수'
          >
            <Input.Text placeholder='기수 입력' />
          </FormField>
          <FormField
            isEssential
            label='유닛'
          >
            <Select
              leadingIcon={GlyphIcon.ADD}
            >
              {
                Object.values(MemberUnit).map(unit => (
                  <Select.Item
                    key={unit}
                    value={unit}
                    label={UnitEnumToKorean(unit)}
                  />
                ))
              }
            </Select>
          </FormField>
          <FormField
            isEssential
            label='역할'
          >
            <Input.Text placeholder='역할 입력' />
          </FormField>
        </VStack>
      </HStack>
    </VStack>
  );
}
