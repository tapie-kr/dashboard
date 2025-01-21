import * as s from './layout.css';

import { InspireProvider } from '@tapie-kr/inspire-react/provider';
import { ThemeProvider } from 'next-themes';

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
