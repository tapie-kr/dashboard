import { spacingVars, StackAlign, Typo, VStack } from '@tapie-kr/inspire-react';

export default function IndexPage() {
  return (
    <VStack
      spacing={spacingVars.micro}
      align={StackAlign.CENTER}
    >
      <Typo.Micro>© 2025 TAPIE. All rights reserved.</Typo.Micro>
      <Typo.Mini>
        로그인 시도 및 접속 기록은 모두 수집되며 비정상적인 활동 감지시 TAPIE는 대응을 위해 해당
        기록을 활용할 수 있습니다.
      </Typo.Mini>
    </VStack>
  );
}
