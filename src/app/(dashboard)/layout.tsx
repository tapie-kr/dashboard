import * as s from './layout.css';

import Breadcrumb from '@/components/breadcrumb';
import Sidebar from '@/components/sidebar';

import { GlyphIcon, HStack, VStack } from '@tapie-kr/inspire-react';

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
          className={s.base}
        >
          <Breadcrumb
            hasRootLabel
            hasLeadingIcon
            root='Root'
            leadingIcon={GlyphIcon.HOME}
            className={s.breadcrumb}
          />
          {props.children}
        </VStack>
      </HStack>
    </>
  );
}
