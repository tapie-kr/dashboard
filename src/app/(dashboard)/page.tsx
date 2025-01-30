import * as s from './page.css'

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
      fullWidth
      fullHeight
    >
      <VStack
        spacing={spacingVars.moderate}
        className={s.container}
        align={StackAlign.START}
      >
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
        <Button.Default fullWidth leadingIcon={BrandIcon.GOOGLE}>Google로 TAPIE 로그인</Button.Default>
      </VStack>
    </HStack>
  );
}
