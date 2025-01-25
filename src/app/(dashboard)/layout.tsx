import * as s from './layout.css';

import Sidebar from '@/components/sidebar';

import { Box, HStack } from '@tapie-kr/inspire-react';

export default function RootLayout(props: { children: React.ReactNode }) {
  return (
    <>
      <HStack
        fullWidth
        fullHeight
        className={s.layout}
      >
        <Sidebar />
        <Box
          className={s.content}
          fullWidth
          fullHeight
        >
          {props.children}
        </Box>
      </HStack>
    </>
  );
}
