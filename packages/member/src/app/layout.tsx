import * as s from './layout.css';

import { InspireProvider } from '@tapie-kr/inspire-react/provider';

import { TapieApiProvider } from '@tapie-kr/api-client';
import Favicon from '@tapie-kr/dashboard-shared/assets/favicon.png';
import { type Metadata } from 'next';
import { ThemeProvider } from 'next-themes';

export const metadata: Metadata = {
  title:       'TAPIE 대시보드',
  description: 'TAPIE Dashboard',
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
            <TapieApiProvider>
              <InspireProvider>{props.children}</InspireProvider>
            </TapieApiProvider>
          </ThemeProvider>
        </body>
      </html>
    </>
  );
}
