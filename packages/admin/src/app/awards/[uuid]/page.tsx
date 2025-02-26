'use client';

import { spacingVars, StackAlign, VStack } from '@tapie-kr/inspire-react';
import Page from '@/components/page';

import { use } from 'react';
import AwardsDetailActionSection from '@/sections/awards/detail/Action';
import AwardsDetailFormSection from '@/sections/awards/detail/Form';
import AwardsDetailInfoSection from '@/sections/awards/detail/Info';

export default function AchievementDetailPage({ params }: {
  params: Promise<{
    uuid: string;
  }>;
}) {
  const { uuid } = use(params);

  return (
    <Page title='수상실적 상세'>
      <VStack
        fullWidth
        spacing={spacingVars.medium}
        align={StackAlign.START}
      >
        <AwardsDetailFormSection />
        <AwardsDetailInfoSection
          uuid={uuid}
        />
        <AwardsDetailActionSection />
      </VStack>
    </Page>
  );
}
