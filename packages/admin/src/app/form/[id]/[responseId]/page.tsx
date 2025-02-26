'use client';

import * as s from './page.css';

import { spacingVars, StackAlign, VStack } from '@tapie-kr/inspire-react';
import Page from '@/components/page';

import { usePrivateFormApplication } from '@tapie-kr/api-client';
import { MemberUnit } from '@tapie-kr/api-client/enum';
import { use, useEffect } from 'react';
import ApplicationDetailActionSection from '@/sections/application/detail/Action';
import ApplicationDetailInfoSection from '@/sections/application/detail/Info';
import SkeletonApplicationDetailInfo from '@/sections/application/detail/Info/Skeleton';

export default function ApplicationDetailResponsePage({ params }: {
  params: Promise<{
    responseId: number;
  }>;
}) {
  const { responseId } = use(params);

  const {
    data,
    fetch,
    isPending,
  } = usePrivateFormApplication();

  useEffect(() => {
    fetch({ param: { applicationUUID: responseId } });
  }, []);

  return (
    <Page title='신청폼 상세'>
      <VStack
        fullWidth
        className={s.base}
        spacing={spacingVars.moderate}
        align={StackAlign.START}
      >
        {isPending && <SkeletonApplicationDetailInfo />}
        {data?.data && (
          <ApplicationDetailInfoSection
            portfolio={data.data.portfolioAssetUUID}
            personalInfo={{
              name:        data.data.name || '불러오는 중',
              studentId:   Number(data.data.studentId) || 0,
              googleEmail: data.data.googleEmail || '불러오는 중',
              phoneNumber: data.data.phoneNumber || '불러오는 중',
            }}
            applicationInfo={{
              unit:               data.data.unit || MemberUnit.DEVELOPER,
              introduction:       data.data.introduction || '불러오는 중',
              motivation:         data.data.motivation || '불러오는 중',
              expectedActivities: data.data.expectedActivities || '불러오는 중',
              reasonToChoose:     data.data.reasonToChoose || '불러오는 중',
            }}
          />
        )}
        <ApplicationDetailActionSection responseId={responseId} />
      </VStack>
    </Page>
  );
}
