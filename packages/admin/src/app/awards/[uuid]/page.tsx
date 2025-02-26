'use client';

import { spacingVars, StackAlign, VStack } from '@tapie-kr/inspire-react';
import Page from '@/components/page';

import { use, useState } from 'react';
import AwardsDetailActionSection from '@/sections/awards/detail/Action';
import AwardsDetailFormSection from '@/sections/awards/detail/Form';
import AwardsDetailInfoSection from '@/sections/awards/detail/Info';

export default function AwardsDetailpage({ params }: {
  params: Promise<{
    uuid: string;
  }>;
}) {
  const { uuid } = use(params);

  const [competition, setCompetition] = useState<{
    uuid?: string;
    name?: string;
  }>({});

  return (
    <Page title='수상실적 상세'>
      <VStack
        fullWidth
        spacing={spacingVars.medium}
        align={StackAlign.START}
      >
        <AwardsDetailFormSection
          competition={competition}
          setCompetition={setCompetition}
        />
        <AwardsDetailInfoSection
          uuid={uuid}
        />
        <AwardsDetailActionSection />
      </VStack>
    </Page>
  );
}
