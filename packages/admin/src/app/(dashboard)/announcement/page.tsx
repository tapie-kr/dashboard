import { spacingVars, StackAlign, VStack } from '@tapie-kr/inspire-react';
import Page from '@/components/page';

import AnnouncementFormSection from '@/sections/announcement/Form';
import AnnouncementHistorySection from '@/sections/announcement/History';

export default function AnnouncementPage() {
  return (
    <Page title='공지사항'>
      <VStack
        fullWidth
        spacing={spacingVars.medium}
        align={StackAlign.START}
      >
        <AnnouncementFormSection />
        <AnnouncementHistorySection />
      </VStack>
    </Page>
  );
}
