import * as s from './layout.css';

import Header from '@/components/header';
import Sidebar from '@/components/sidebar';

import { HStack, spacingVars, StackJustify, VStack } from '@tapie-kr/inspire-react';

export default function RootLayout(props: { children: React.ReactNode }) {
  return (
    <>
      <HStack
        fullWidth
        fullHeight
      >
        <Sidebar />
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
            {props.children}
          </VStack>
        </VStack>
      </HStack>
    </>
  );
}
