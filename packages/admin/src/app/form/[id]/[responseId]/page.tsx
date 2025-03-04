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
    responseId: string;
  }>;
}) {
  const { responseId } = use(params);

  const {
    data,
    fetch,
    isPending,
  } = usePrivateFormApplication();

  useEffect(() => {
    fetch({ param: { applicationUUID: String(responseId) } });
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
            applicationUUID={responseId}
            portfolio={data.data.portfolio}
            personalInfo={{
              name:        data.data.name,
              studentId:   Number(data.data.studentId),
              googleEmail: data.data.googleEmail,
              phoneNumber: data.data.phoneNumber,
            }}
            applicationInfo={{
              unit:               data.data.unit || MemberUnit.DEVELOPER,
              introduction:       data.data.introduction,
              motivation:         data.data.motivation,
              expectedActivities: data.data.expectedActivities,
              reasonToChoose:     data.data.reasonToChoose,
            }}
          />
        )}
        <ApplicationDetailActionSection responseId={responseId} />
      </VStack>
    </Page>
  );
}
