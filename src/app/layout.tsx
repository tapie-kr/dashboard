import * as s from './layout.css';

import { InspireProvider } from '@tapie-kr/inspire-react/provider';
import { type Metadata } from 'next';
import { ThemeProvider } from 'next-themes';

export const metadata: Metadata = {
  title: 'TAPIE 관리 시스템',
  description: 'TAPIE Management System',
};

export default function RootLayout(props: { children: React.ReactNode }) {
  return (
    <>
      <html suppressHydrationWarning>
        <body className={s.body}>
          <ThemeProvider>
            <InspireProvider>{props.children}</InspireProvider>
          </ThemeProvider>
        </body>
      </html>
    </>
  );
}
