import * as s from './page.css';

import {
  BrandIcon,
  Button,
  HStack,
  spacingVars,
  StackAlign,
  TAPIESymbol,
  TAPIESymbolSize,
  Typo,
  VStack,
  Weight,
} from '@tapie-kr/inspire-react';

export default function IndexPage() {
  return (
    <HStack
      className={s.base}
      fullWidth
      fullHeight
    >
      <VStack spacing={spacingVars.moderate}>
        <VStack
          spacing={spacingVars.tiny}
          align={StackAlign.START}
        >
          <TAPIESymbol
            size={TAPIESymbolSize._16}
            hasLabel
          />
          <Typo.Medium weight={Weight.BOLD}>관리 시스템</Typo.Medium>
        </VStack>
        <Button.Default leadingIcon={BrandIcon.GOOGLE}>Google로 TAPIE 로그인</Button.Default>
      </VStack>

      <VStack
        spacing={spacingVars.micro}
        className={s.footer}
      >
        <Typo.Micro>© 2025 TAPIE. All rights reserved.</Typo.Micro>
        <Typo.Mini>
          로그인 시도 및 접속 기록은 모두 수집되며 비정상적인 활동 감지시 TAPIE는 대응을 위해 해당
          기록을 활용할 수 있습니다.
        </Typo.Mini>
      </VStack>
    </HStack>
  );
}
