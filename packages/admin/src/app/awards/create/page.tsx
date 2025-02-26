'use client';

import { spacingVars, StackAlign, VStack } from '@tapie-kr/inspire-react';
import Page from '@/components/page';

import { Temporal } from '@js-temporal/polyfill';
import { useState } from 'react';
import AwardsCreateActionSection from '@/sections/awards/create/Action';
import AwardsCreateFormSection, { AwardsCreateCompetitionType } from '@/sections/awards/create/Form';
import AwardsCreateInfoSection, { AwardsCreateMemberType } from '@/sections/awards/create/Info';

export default function AwardsCreatePage() {
  const [competition, setCompetition] = useState<AwardsCreateCompetitionType>({});
  const [grade, setGrade] = useState<number | undefined>();
  const [gradeLabel, setGradeLabel] = useState<string | undefined>();
  const [rewardedAt, setRewardedAt] = useState<Temporal.PlainDate | undefined>(undefined);
  const [title, setTitle] = useState<string>('');
  const [members, setMembers] = useState<AwardsCreateMemberType[]>([]);

  return (
    <Page title='수상실적 등록'>
      <VStack
        fullWidth
        spacing={spacingVars.medium}
        align={StackAlign.START}
      >
        <AwardsCreateFormSection
          competition={competition}
          setCompetition={setCompetition}
          grade={grade}
          setGrade={setGrade}
          gradeLabel={gradeLabel}
          setGradeLabel={setGradeLabel}
          title={title}
          setTitle={setTitle}
          rewardedAt={rewardedAt}
          setRewardedAt={setRewardedAt}
        />
        <AwardsCreateInfoSection
          members={members}
          setMembers={setMembers}
        />
        <AwardsCreateActionSection
          competition={competition}
          grade={grade}
          gradeLabel={gradeLabel}
          members={members}
          title={title}
          rewardedAt={rewardedAt}
        />
      </VStack>
    </Page>
  );
}
