'use client';

import * as s from './page.css';

import { spacingVars, StackAlign, VStack } from '@tapie-kr/inspire-react';
import Page from '@/components/page';

import { MemberUnitType, usePrivateFormApplication } from '@tapie-kr/api-client';
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
  } = usePrivateFormApplication(responseId);

  useEffect(() => {
    fetch();
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
        {data && (
          <ApplicationDetailInfoSection
            portfolio={data?.data.portfolioAssetUUID}
            personalInfo={{
              name:        data?.data.name || '불러오는 중',
              studentId:   Number(data?.data.studentId) || 0,
              googleEmail: data?.data.googleEmail || '불러오는 중',
              phoneNumber: data?.data.phoneNumber || '불러오는 중',
            }}
            applicationInfo={{
              unit:               data?.data.unit || MemberUnitType.DEVELOPER,
              introduction:       data?.data.introduction || '불러오는 중',
              motivation:         data?.data.motivation || '불러오는 중',
              expectedActivities: data?.data.expectedActivities || '불러오는 중',
              reasonToChoose:     data?.data.reasonToChoose || '불러오는 중',
            }}
          />
        )}
        <ApplicationDetailActionSection />
      </VStack>
    </Page>
  );
}
