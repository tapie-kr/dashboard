import Sidebar from '@/components/sidebar';

import { HStack } from '@tapie-kr/inspire-react';

export default function RootLayout(props: { children: React.ReactNode }) {
  return (
    <>
      <HStack
        fullWidth
        fullHeight
      >
        <Sidebar />

        {props.children}
      </HStack>
    </>
  );
}
