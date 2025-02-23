import * as s from './layout.css';

import { InspireProvider } from '@tapie-kr/inspire-react/provider';

import Favicon from '@tapie-kr/dashboard-shared/assets/favicon.png';
import { type Metadata } from 'next';
import { ThemeProvider } from 'next-themes';

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
            <InspireProvider>{props.children}</InspireProvider>
          </ThemeProvider>
        </body>
      </html>
    </>
  );
}
