'use client';

import HomeworkCard from '@/components/card/homework';
import PageTemplate from '@/components/page-template';

import { Temporal } from '@js-temporal/polyfill';
import {
  Filter,
  GlyphIcon,
  Grid,
  spacingVars,
  StackAlign,
  Typo,
  VStack,
  Weight,
} from '@tapie-kr/inspire-react';
import { use } from 'react';
import { Unit } from '@/lib/enum';
import { getContestFilterGroup } from '@/lib/enum/utils';
import HomeworkDetailContentSection from '@/sections/homework/detail/Content';
import { homeworkData } from '../page';

export default function HomeworkDetailPage({ params }: { params: Promise<{ id: number }> }) {
  const { id } = use(params);

  const title = homeworkData[Number(id) - 1].title;

  return (
    <PageTemplate
      title={title || '과제 상세'}
      hasCount={false}
    >
      <VStack
        spacing={spacingVars.jumbo}
        align={StackAlign.START}
        fullWidth
      >
        <HomeworkDetailContentSection content={'안녕하세요\n저는 권지원입니다.'} />
        <VStack
          spacing={spacingVars.moderate}
          align={StackAlign.START}
        >
          <Typo.Moderate weight={Weight.SEMIBOLD}>제출 인원</Typo.Moderate>
          <VStack
            spacing={spacingVars.petite}
            align={StackAlign.START}
          >
            <Filter
              filters={[
                {
                  label: '상태',
                  options: [
                    {
                      label: '제출 완료',
                      icon: GlyphIcon.CHECK,
                      value: '제출 완료',
                    },
                    {
                      label: '취소',
                      icon: GlyphIcon.BLOCK,
                      value: '취소',
                    },
                  ],
                },
                getContestFilterGroup(),
              ]}
            />
            <Grid
              gap={spacingVars.petite}
              columnCount={3}
            >
              <HomeworkCard
                member={{ studentId: 10417, name: '신유준' }}
                isSubmitted
                unit={Unit.DESIGNER}
                files={[
                  'https://minio-s4008w0wsg40sg48o0wwscc8.apne2a.algorix.cloud/tapie-management-system/AppCleaner_3.6.8.zip',
                  'https://minio-s4008w0wsg40sg48o0wwscc8.apne2a.algorix.cloud/tapie-management-system/datepicker-context.png',
                ]}
                date={Temporal.PlainDateTime.from({
                  year: 2024,
                  month: 12,
                  day: 23,
                  hour: 11,
                  minute: 58,
                })}
              />
              {Array.from({ length: 5 }).map((_, index) => (
                <HomeworkCard
                  key={index}
                  member={{ studentId: 10417, name: '신유준' }}
                  unit={Unit.DEVELOPER}
                  isSubmitted={false}
                  files={[
                    'https://minio-s4008w0wsg40sg48o0wwscc8.apne2a.algorix.cloud/tapie-management-system/AppCleaner_3.6.8.zip',
                    'https://minio-s4008w0wsg40sg48o0wwscc8.apne2a.algorix.cloud/tapie-management-system/2024학년도고등학교학사일정현황(탑재용).pdf',
                  ]}
                  date={Temporal.PlainDateTime.from({
                    year: 2024,
                    month: 12,
                    day: 23,
                    hour: 11,
                    minute: 58,
                  })}
                />
              ))}
            </Grid>
          </VStack>
        </VStack>
      </VStack>
    </PageTemplate>
  );
}
