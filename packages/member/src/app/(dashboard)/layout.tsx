import * as s from './layout.css';

import { Box, HStack } from '@tapie-kr/inspire-react';

import Sidebar from '@tapie-kr/dashboard-shared/layout/sidebar';
import { path, sidebarMap } from '@/lib/pathmap';

export default function RootLayout(props: {
  children: React.ReactNode;
}) {
  return (
    <>
      <HStack
        fullWidth
        fullHeight
        className={s.layout}
      >
        <Sidebar
          pathMap={path}
          sidebarMap={sidebarMap}
        />
        <Box
          fullWidth
          fullHeight
          className={s.content}
        >
          {props.children}
        </Box>
      </HStack>
    </>
  );
}
