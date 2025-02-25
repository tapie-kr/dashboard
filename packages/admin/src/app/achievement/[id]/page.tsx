'use client'

import { spacingVars, StackAlign, VStack } from '@tapie-kr/inspire-react';
import Page from '@/components/page';

import { use, useEffect } from 'react';
import AchievementDetailActionSection from '@/sections/achievement/detail/Action';
import AchievementDetailFormSection from '@/sections/achievement/detail/Form';
import AchievementDetailInfoSection from '@/sections/achievement/detail/Info';
import { usePrivateCompetitionAwardList } from '@tapie-kr/api-client';

export default function AchievementDetailPage({ params }: {
  params: Promise<{
    id: string;
  }>;
}) {
  const { id } = use(params);

  const {data, fetch, isPending} = usePrivateCompetitionAwardList(id);

  useEffect(() => {
    fetch();
  }, []);

  return (
    <Page title='수상실적 상세'>
      <VStack
        fullWidth
        spacing={spacingVars.medium}
        align={StackAlign.START}
      >
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
