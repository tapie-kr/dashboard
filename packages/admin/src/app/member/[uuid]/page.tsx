'use client';

import { spacingVars, StackAlign, VStack } from '@tapie-kr/inspire-react';
import Page from '@/components/page';

import { usePrivateMember } from '@tapie-kr/api-client';
import { use, useEffect } from 'react';
import MemberDetailActionSection from '@/sections/member/detail/Action';
import MemberDetailBasicInfoSection from '@/sections/member/detail/BasicInfo';
import MemberDetailInfoSection from '@/sections/member/detail/Info';
import MemberDetailSummarySection from '@/sections/member/detail/Summary';

export default function MemberDetailPage({ params }: {
  params: Promise<{
    uuid: string;
  }>;
}) {
  const { uuid } = use(params);
  const { data: member, fetch } = usePrivateMember();

  useEffect(() => {
    fetch({ param: { memberUUID: uuid } });
  }, []);

  const data = member?.data;

  return (
    <Page title='부원 상세'>
      <VStack
        fullWidth
        spacing={spacingVars.jumbo}
        align={StackAlign.START}
      >
        {
          data && (
            <>
              <MemberDetailSummarySection
                {...data}
              />
              <MemberDetailBasicInfoSection {...data} />
              <MemberDetailActionSection />
              <MemberDetailInfoSection
                profileLink={[]}
                skill={data.skills}
                awards={data.awards}
                portfolio={[]}
                history={data.history}
              />
            </>
          )
        }
      </VStack>
    </Page>
  );
}
