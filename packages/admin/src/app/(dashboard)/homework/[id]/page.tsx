'use client';

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
import HomeworkCard from '@/components/card/homework';
import Page from '@/components/page';

import { Temporal } from '@js-temporal/polyfill';
import { use } from 'react';
import { Unit } from '@/lib/enum';
import { getContestFilterGroup } from '@/lib/enum/utils';
import HomeworkDetailContentSection from '@/sections/homework/detail/Content';
import { homeworkData } from '../page';

export default function HomeworkDetailPage({ params }: {
  params: Promise<{
    id: number;
  }>;
}) {
  const { id } = use(params);
  const title = homeworkData[Number(id) - 1].title;

  return (
    <Page
      title={title || '과제 상세'}
      hasCount={false}
    >
      <VStack
        fullWidth
        spacing={spacingVars.jumbo}
        align={StackAlign.START}
      >
        <HomeworkDetailContentSection
          content={`기본 앱 구현제공된 리액트 템플릿 프로젝트 또는 직접 구현한 간단한 애플리케이션을 사용하여 기본 동작을 확인합니다.애플리케이션은 간단한 CRUD 기능을 포함하고, 렌더링 및 상태 관리가 빈번하게 발생하도록 설계합니다.
성능 분석애플리케이션 성능을 분석하기 위해 다음 도구 및 기법을 사용합니다.
React Developer Tools (Profiler)
Chrome DevTools의 Performance 탭
console.time()과 같은 성능 측정 도구
성능 저하 원인 파악분석 결과를 바탕으로 성능 저하의 원인을 탐구합니다.예를 들어, 불필요한 렌더링, 메모리 과다 사용, 이벤트 처리 성능 문제 등을 조사합니다.
최적화 적용성능 저하를 개선하기 위해 다음과 같은 최적화 기법을 적용합니다.
React.memo, useMemo, useCallback 사용
리스트 렌더링에 Virtualization 적용 (react-window 등 사용)
코드 분할(Code Splitting)과 동적 로딩
상태 관리 도구의 적절한 활용 (Context API 최적화, Redux Toolkit 등)
필요에 따라 추가적인 최적화 기법 사용
결과 보고서 작성최적화 전후의 성능 데이터를 비교하여 결과를 정리합니다.
성능 지표 변화 (렌더링 시간, 메모리 사용량 등)
사용한 최적화 기법과 관련 코드 설명
최적화로 인한 사용자 경험 변화 분석`}
        />
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
                  label:   '상태',
                  options: [
                    {
                      label: '제출 완료',
                      icon:  GlyphIcon.CHECK,
                      value: '제출 완료',
                    },
                    {
                      label: '취소',
                      icon:  GlyphIcon.BLOCK,
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
                isSubmitted
                unit={Unit.DESIGNER}
                files={['https://minio-s4008w0wsg40sg48o0wwscc8.apne2a.algorix.cloud/tapie-management-system/AppCleaner_3.6.8.zip', 'https://minio-s4008w0wsg40sg48o0wwscc8.apne2a.algorix.cloud/tapie-management-system/datepicker-context.png']}
                member={{
                  studentId: 10417,
                  name:      '신유준',
                }}
                date={Temporal.PlainDateTime.from({
                  year:   2024,
                  month:  12,
                  day:    23,
                  hour:   11,
                  minute: 58,
                })}
              />
              {Array.from({ length: 5 }).map((_, index) => (
                <HomeworkCard
                  key={index}
                  unit={Unit.DEVELOPER}
                  isSubmitted={false}
                  files={['https://minio-s4008w0wsg40sg48o0wwscc8.apne2a.algorix.cloud/tapie-management-system/AppCleaner_3.6.8.zip', 'https://minio-s4008w0wsg40sg48o0wwscc8.apne2a.algorix.cloud/tapie-management-system/2024학년도고등학교학사일정현황(탑재용).pdf']}
                  member={{
                    studentId: 10417,
                    name:      '신유준',
                  }}
                  date={Temporal.PlainDateTime.from({
                    year:   2024,
                    month:  12,
                    day:    23,
                    hour:   11,
                    minute: 58,
                  })}
                />
              ))}
            </Grid>
          </VStack>
        </VStack>
      </VStack>
    </Page>
  );
}
