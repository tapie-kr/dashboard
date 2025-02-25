import { spacingVars, StackAlign, VStack } from '@tapie-kr/inspire-react';
import Page from '@/components/page';

import { use } from 'react';
import AchievementDetailActionSection from '@/sections/achievement/detail/Action';
import AchievementDetailContestSegment from '@/sections/achievement/detail/ContestSegment';
import AchievementDetailFormSection from '@/sections/achievement/detail/Form';
import AchievementDetailInfoSection from '@/sections/achievement/detail/Info';

export default function AchievementDetailPage({ params }: {
  params: Promise<{
    id: number;
  }>;
}) {
  const { id } = use(params);

  return (
    <Page title='수상실적 상세'>
      <VStack
        fullWidth
        spacing={spacingVars.medium}
        align={StackAlign.START}
      >
        <AchievementDetailContestSegment />
        <AchievementDetailFormSection />
        <AchievementDetailInfoSection
          info={[
            { member: {
              name:      '권지원',
              studentId: '10404',
            } },
          ]}
        />
        <AchievementDetailActionSection />
      </VStack>
    </Page>
  );
}
