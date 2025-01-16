import { type ILayoutProps } from '@cottons-kr/react-foundation';

import { InspireProvider } from '@tapie-kr/inspire-react';
import { ThemeProvider } from 'next-themes';

export default function RootLayout(props: ILayoutProps) {
  return (
    <>
      <html suppressHydrationWarning>
        <body>
          <ThemeProvider>
            <InspireProvider>{props.children}</InspireProvider>
          </ThemeProvider>
        </body>
      </html>
    </>
  );
}
