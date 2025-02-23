'use client';

import * as s from './style.css';

import {
  Button,
  ButtonSize,
  ButtonVariant,
  colorVars,
  GlyphIcon,
  spacingVars,
  TAPIESymbol,
  TAPIESymbolSize,
  Typo,
  VStack,
  Weight,
} from '@tapie-kr/inspire-react';

import { useRouter } from 'next/navigation';

export default function NotFoundPageTemplate() {
  const router = useRouter();

  const handleClick = () => {
    router.back();
  };

  return (
    <VStack
      fullWidth
      fullHeight
      className={s.base}
    >
      <VStack spacing={spacingVars.medium}>
        <TAPIESymbol
          hasLabel
          size={TAPIESymbolSize._24}
        />
        <VStack spacing={spacingVars.petite}>
          <Typo.Medium weight={Weight.MEDIUM}>404 Not Found</Typo.Medium>
          <Typo.Base
            weight={Weight.MEDIUM}
            color={colorVars.content.muted}
          >
            존재하지 않는 페이지입니다.
          </Typo.Base>
        </VStack>
        <Button.Default
          leadingIcon={GlyphIcon.ARROW_BACK}
          variant={ButtonVariant.SECONDARY}
          size={ButtonSize.MEDIUM}
          onClick={handleClick}
        >
          뒤로 돌아가기
        </Button.Default>
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
    </VStack>
  );
}
