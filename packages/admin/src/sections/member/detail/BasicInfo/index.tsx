import {
  FormField,
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

import { MemberType } from '@tapie-kr/api-client';
import { MemberRole, MemberUnit } from '@tapie-kr/api-client/enum';
import { RoleEnumToKorean, UnitEnumToKorean } from '@tapie-kr/dashboard-shared/lib/utils/enum';

export default function MemberDetailBasicInfoSection(props: MemberType) {
  const {
    name,
    studentID,
    username,
    profileUri,
    generation,
    unit,
    role,
  } = props;

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
          align={StackAlign.START}
        >
          <FormField
            isEssential
            label='이름'
          >
            <Input.Text
              disabled
              placeholder='이름 입력'
              value={name}
            />
          </FormField>
          <FormField
            isEssential
            label='학번'
          >
            <Input.Text
              placeholder='학번 입력'
              value={studentID}
            />
          </FormField>
          <FormField
            isEssential
            label='유저네임'
            description='해당 유저네임으로 TAPIE 이메일이 생성됩니다.'
          >
            <Input.Text
              placeholder='유저네임 입력'
              value={username}
            />
          </FormField>
          <FormField
            isEssential
            fitContent
            label='프로필 사진'
          >
            <Input.ImagePreview
              shape={ImagePreviewShape.CIRCLE}
              size={100}
              preview={profileUri}
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
            <Input.Text
              placeholder='기수 입력'
              value={String(generation)}
            />
          </FormField>
          <FormField
            isEssential
            label='유닛'
          >
            <Select
              placeholder='유닛 선택'
              value={unit}
              options={Object.values(MemberUnit).map(unit => ({
                label: UnitEnumToKorean(unit),
                value: unit,
              }))}
            />
          </FormField>
          <FormField
            isEssential
            label='역할'

          >
            <Select
              placeholder='역할 선택'
              value={role}
              options={Object.values(MemberRole).map(unit => ({
                label: RoleEnumToKorean(unit),
                value: unit,
              }))}
            />
          </FormField>
        </VStack>
      </HStack>
    </VStack>
  );
}
