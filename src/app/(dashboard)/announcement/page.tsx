import PageTemplate from '@/components/page-template';

import { spacingVars, StackAlign, VStack } from '@tapie-kr/inspire-react';
import AnnouncementFormSection from '@/sections/announcement/Form';
import AnnouncementHistorySection from '@/sections/announcement/History';

export default function AnnouncementPage() {
  return (
    <PageTemplate title={'공지사항'}>
      <VStack
        spacing={spacingVars.medium}
        fullWidth
        align={StackAlign.START}
      >
        <AnnouncementFormSection />
        <AnnouncementHistorySection />
      </VStack>
    </PageTemplate>
  );
}
