import * as s from './style.css';

import { HStack, spacingVars, StackJustify, VStack } from '@tapie-kr/inspire-react';
import Header from '../header';

export default function PageTemplate() {
  return (
    <VStack
      fullWidth
      fullHeight
      justify={StackJustify.START}
      className={s.base}
    >
      <VStack
        fullWidth
        className={s.container}
        spacing={spacingVars.jumbo}
      >
        <HStack
          fullWidth
          justify={StackJustify.START}
        >
          <Header
            title={'Title'}
            count={99}
            hasSearch
          />
        </HStack>
      </VStack>
    </VStack>
  );
}
