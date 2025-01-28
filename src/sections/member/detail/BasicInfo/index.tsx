import {
  FormField,
  HStack,
  ImagePreviewShape,
  Input,
  spacingVars,
  StackAlign,
  Typo,
  VStack,
  Weight,
} from '@tapie-kr/inspire-react';

export default function MemberDetailBasicInfoSection() {
  return (
    <VStack
      spacing={spacingVars.base}
      align={StackAlign.START}
      fullWidth
      fullHeight
    >
      <Typo.Moderate weight={Weight.SEMIBOLD}>기본 정보</Typo.Moderate>
      <HStack
        fullWidth
        fullHeight
        spacing={spacingVars.medium}
        align={StackAlign.START}
      >
        <VStack
          spacing={spacingVars.moderate}
          fullWidth
        >
          <FormField
            label={'이름'}
            isEssential
          >
            <Input.Text placeholder={'이름 입력'} />
          </FormField>
          <FormField
            label={'유저네임'}
            isEssential
            description={'해당 유저네임으로 TAPIE 이메일이 생성됩니다.'}
          >
            <Input.Text placeholder={'유저네임 입력'} />
          </FormField>
          <FormField
            label={'프로필 사진'}
            isEssential
          >
            <Input.ImagePreview
              shape={ImagePreviewShape.CIRCLE}
              size={100}
            />
          </FormField>
        </VStack>
        <VStack
          spacing={spacingVars.moderate}
          fullWidth
        >
          <FormField
            label={'기수'}
            isEssential
          >
            <Input.Text placeholder={'기수 입력'} />
          </FormField>
          <FormField
            label={'유닛'}
            isEssential
          >
            <Input.Text placeholder={'유닛 입력'} />
          </FormField>
          <FormField
            label={'역할'}
            isEssential
          >
            <Input.Text placeholder={'역할 입력'} />
          </FormField>
        </VStack>
      </HStack>
    </VStack>
  );
}
