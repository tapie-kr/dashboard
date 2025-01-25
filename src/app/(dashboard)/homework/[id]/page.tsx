'use client';

import * as s from './page.css';

import HomeworkCard from '@/components/homework-card';
import PageTemplate from '@/components/page-template';

import { Temporal } from '@js-temporal/polyfill';
import {
  Button,
  ButtonSize,
  ButtonVariant,
  colorVars,
  Filter,
  GlyphIcon,
  HStack,
  spacingVars,
  StackAlign,
  Typo,
  VStack,
  Weight,
} from '@tapie-kr/inspire-react';
import { use, useEffect } from 'react';
import { Unit } from '@/lib/enum';
import { getUnitIcon } from '@/lib/enum/util';
import { homeworkData } from '../page';

export default function HomeworkDetailPage({ params }: { params: Promise<{ id: number }> }) {
  const { id } = use(params);

  const title = homeworkData[Number(id)].title;

  return (
    <PageTemplate
      title={title || '과제 상세'}
      hasCount={false}
    >
      <VStack
        spacing={spacingVars.medium}
        align={StackAlign.START}
        fullWidth
      >
        <VStack
          spacing={spacingVars.petite}
          align={StackAlign.START}
        >
          <VStack
            spacing={spacingVars.base}
            className={s.detail}
            fullWidth
          >
            <VStack
              spacing={spacingVars.tiny}
              align={StackAlign.START}
              fullWidth
            >
              <Typo.Tiny
                weight={Weight.MEDIUM}
                color={colorVars.content.muted}
              >
                과제 내용
              </Typo.Tiny>
              <Typo.Micro weight={Weight.MEDIUM}>
                1. 기본 앱 구현
                <br />
                테스트입니다.
              </Typo.Micro>
            </VStack>
            <VStack
              spacing={spacingVars.tiny}
              align={StackAlign.START}
              fullWidth
            >
              <Typo.Tiny
                weight={Weight.MEDIUM}
                color={colorVars.content.muted}
              >
                첨부 파일
              </Typo.Tiny>
              <HStack spacing={spacingVars.tiny}>
                <Button.Default
                  leadingIcon={GlyphIcon.UPLOAD}
                  size={ButtonSize.SMALL}
                  variant={ButtonVariant.SECONDARY}
                >
                  첨부파일 업로드
                </Button.Default>
                {/* TODO SEGMENT */}
              </HStack>
            </VStack>
          </VStack>
          <HStack spacing={spacingVars.petite}>
            <Button.Default
              size={ButtonSize.SMALL}
              leadingIcon={GlyphIcon.CHECK}
            >
              과제 채점하기
            </Button.Default>
            <Button.Default
              size={ButtonSize.SMALL}
              variant={ButtonVariant.SECONDARY}
              leadingIcon={GlyphIcon.CLOSE}
            >
              과제 닫기
            </Button.Default>
          </HStack>
        </VStack>
        <VStack spacing={spacingVars.moderate}>
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
                {
                  label: '유닛',
                  options: Object.values(Unit).map(unit => ({
                    label: unit,
                    icon: getUnitIcon(unit),
                    value: unit,
                  })),
                },
              ]}
            />
            <HStack
              spacing={spacingVars.petite}
              align={StackAlign.START}
            >
              <HomeworkCard
                schoolId={10417}
                name={'신유준'}
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
              <HomeworkCard
                schoolId={10417}
                name={'신유준'}
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
            </HStack>
          </VStack>
        </VStack>
      </VStack>
    </PageTemplate>
  );
}
