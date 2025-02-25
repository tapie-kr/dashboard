import * as s from './layout.css';

import { Box, HStack } from '@tapie-kr/inspire-react';
import { InspireProvider } from '@tapie-kr/inspire-react/provider';

import Favicon from '@tapie-kr/dashboard-shared/assets/favicon.png';
import Sidebar from '@tapie-kr/dashboard-shared/layout/sidebar';
import { type Metadata } from 'next';
import { ThemeProvider } from 'next-themes';
import { path, sidebarMap } from '@/lib/pathmap';

export const metadata: Metadata = {
  title:       'TAPIE 관리 시스템',
  description: 'TAPIE Management System',
};

export default function RootLayout(props: {
  children: React.ReactNode;
}) {
  return (
    <>
      <html suppressHydrationWarning>
        <head>
          <link
            rel='icon'
            type='image/png'
            href={Favicon.src}
          />
        </head>
        <body className={s.body}>
          <ThemeProvider>
            <InspireProvider>
              <HStack
                fullWidth
                fullHeight
                className={s.layout}
              >
                <Sidebar
                  pathMap={path}
                  service='admin'
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
            </InspireProvider>
          </ThemeProvider>
        </body>
      </html>
    </>
  );
}
